import type {InternalId} from "@/types/InternalId.ts";
import type {Group} from "@/types/Group.ts";

export type Room = {
  id: InternalId,
  name: string,
  description?: string,
  is_active: boolean,
  address?: string,
  devices?: string[],
  responsible?: {
    id: InternalId,
    role: {
      id: InternalId,
      name: string
    },
    groups: Group[],
    login: string,
    name: string,
    email: string,
    is_active: boolean,
  }
}
