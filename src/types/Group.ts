import type {InternalId} from "@/types/InternalId.ts";

export type Group = {
  id: InternalId,
  name: string,
  is_active: boolean,
  speciality?: string,
}
