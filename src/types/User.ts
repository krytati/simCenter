import type { InternalId } from '@/types/InternalId.ts';

export type User = {
  id: InternalId;
  login: string;
  name: string;
  email: string;
};
