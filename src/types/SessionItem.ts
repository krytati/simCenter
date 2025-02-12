import type {User} from "@/types/User.ts";
import type {Room} from "@/types/Room.ts";
import type {Group} from "@/types/Group.ts";
import type {InternalId} from "@/types/InternalId.ts";

export type SessionItem = {
  id: InternalId,
  module: string,
  start: string,
  end: string,
  status: {
    id: InternalId,
    name: SessionStatus,
  },
  type: {
    id: InternalId,
    name: SessionType,
  }
  groups?: Group[],
  rooms?: Room[],
  users?: User[],
}

export enum SessionStatus {
  planned = "planned",
  completed = "completed",
  canceled = "canceled",
  progress = "progress"
}

export enum SessionType {
  accreditation = "accreditation",
  lesson = "lesson",
  examination = "examination",
}
