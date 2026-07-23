export interface StayflexiClientConfig {
  apiKey: string;
  hotelId: string;
}

export interface TTLockClientConfig {
  clientId: string;
  clientSecret: string;
}

export function createIntegrationStatus(): { stayflexi: string; ttlock: string } {
  return {
    stayflexi: 'initialized',
    ttlock: 'initialized',
  };
}
