import { z } from 'zod';

export const EnvSchema = z.object({
  DATABASE_URL: z.string().url().default('postgresql://postgres:postgres@localhost:5432/bookingengine'),
  JWT_SECRET: z.string().min(16).default('development-jwt-secret-min-16-chars-long'),
  JWT_REFRESH_SECRET: z.string().min(16).default('development-refresh-secret-min-16-chars-long'),
  ENVIRONMENT: z.enum(['development', 'staging', 'production']).default('development'),
});

export type EnvConfig = z.infer<typeof EnvSchema>;

export function loadEnv(env: Record<string, string | undefined>): EnvConfig {
  return EnvSchema.parse(env);
}
