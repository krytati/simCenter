import type { SessionItem } from '@/types/SessionItem.ts'

export const SessionService = {
  getSessions: async (): Promise<SessionItem[] | null> => {
    const data = (await import("@/fixtures/data1.json"));
    if (!data?.sessions) return null;

    const uniqueSessions = Array.from(
      new Map(data.sessions.map(session => [session.id, session])).values()
    );

    return uniqueSessions as unknown as SessionItem[];
  },
}
