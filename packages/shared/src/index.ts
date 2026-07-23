import { z } from 'zod';

export const HealthCheckResponseSchema = z.object({
  status: z.enum(['ok', 'degraded', 'error']),
  timestamp: z.string(),
  version: z.string(),
  environment: z.string(),
});

export type HealthCheckResponse = z.infer<typeof HealthCheckResponseSchema>;

export const ApiEnvelopeSchema = <T extends z.ZodTypeAny>(dataSchema: T) =>
  z.object({
    success: z.boolean(),
    data: dataSchema.nullable(),
    error: z
      .object({
        code: z.string(),
        message: z.string(),
      })
      .nullable(),
    meta: z.object({
      timestamp: z.string(),
      requestId: z.string(),
    }),
  });

export interface SystemStatus {
  service: string;
  online: boolean;
}
