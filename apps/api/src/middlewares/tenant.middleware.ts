import { MiddlewareHandler } from 'hono';
import { MemoryOrganizationRepository, TenantResolver } from '@bookingengine/auth';
import { TenantContext } from '@bookingengine/types';

const orgRepo = new MemoryOrganizationRepository();
const tenantResolver = new TenantResolver(orgRepo);

export interface TenantContextVariables {
  tenantContext: TenantContext;
}

export const tenantMiddleware: MiddlewareHandler<{ Variables: TenantContextVariables }> = async (c, next) => {
  const headerOrgId = c.req.header('X-Organization-Id');
  const hostHeader = c.req.header('Host');
  const session = c.get('session' as any);
  const sessionOrgId = session?.organizationId;

  const tenantContext = await tenantResolver.resolveContext(headerOrgId, hostHeader, sessionOrgId);

  if (!tenantContext) {
    return c.json(
      {
        success: false,
        data: null,
        error: { code: 'TENANT_NOT_FOUND', message: 'Organization tenant could not be resolved or is inactive.' },
        meta: { timestamp: new Date().toISOString(), requestId: crypto.randomUUID() },
      },
      404,
    );
  }

  // Cross-tenant protection guard
  if (sessionOrgId && !tenantResolver.validateCrossTenantAccess(sessionOrgId, tenantContext.organization.id)) {
    return c.json(
      {
        success: false,
        data: null,
        error: { code: 'FORBIDDEN_TENANT_ACCESS', message: 'Cross-tenant access violation detected.' },
        meta: { timestamp: new Date().toISOString(), requestId: crypto.randomUUID() },
      },
      403,
    );
  }

  c.set('tenantContext', tenantContext);
  await next();
};
