export type Environment = 'development' | 'staging' | 'production';

export interface BaseEntity {
  id: string;
  createdAt: string;
  updatedAt: string;
}
