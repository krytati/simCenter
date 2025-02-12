import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { SessionService } from '@/components/Sessions/services/Session.service.ts';
import { useSessionListStore } from '@/components/Sessions/stores/SessionList.store.ts';
import { setActivePinia, createPinia } from 'pinia';
import type { SessionItem } from '@/types/SessionItem.ts';

vi.mock('@/components/Sessions/services/Session.service');

describe('SessionList store', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  afterEach(() => vi.resetModules());

  const mockedSessionService = vi.mocked(SessionService);

  it('SHOULD get sessions', async () => {
    const expectedSessions: Partial<SessionItem>[] = [
      {
        id: 111,
        module: 'test',
      },
    ];

    mockedSessionService.getSessions.mockResolvedValue(expectedSessions as SessionItem[]);

    const store = useSessionListStore();
    await store.getData(0, 10);

    expect(store.sessions).toMatchObject(expectedSessions);
  });

  it('SHOULD set sessions to null WHEN data does not exist', async () => {
    mockedSessionService.getSessions.mockResolvedValue(null);

    const store = useSessionListStore();
    await store.getData(1, 10);

    expect(store.sessions).toBeNull();
  });
});
