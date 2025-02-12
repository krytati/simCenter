import { defineStore } from 'pinia';
import type { SessionItem } from '@/types/SessionItem.ts';
import { computed, ref } from 'vue';
import { SessionService } from '@/components/Sessions/services/Session.service.ts';
import { HeaderKey } from '@/types/HeaderKey.ts';

export const useSessionListStore = defineStore('sessionList', () => {
  const sessions = ref<SessionItem[] | null>(null);
  const rawSessions = ref<SessionItem[] | null>(null);
  const filteredSessions = ref<SessionItem[] | null>(null);

  const sessionsCount = computed(() => filteredSessions.value?.length ?? 0);

  const currentPage = ref(0);
  const itemsPerPage = ref(0);

  async function getData(start: number, itemsPerPage: number) {
    rawSessions.value = await SessionService.getSessions();
    filteredSessions.value = rawSessions.value;
    getItems(start, itemsPerPage);
  }

  const sortSessionData = (key: HeaderKey, order: number) => {
    if (!filteredSessions.value) return;
    filteredSessions.value = filteredSessions.value.sort((a, b) => {
      switch (key) {
        case HeaderKey.dateTime:
          return (a.start > b.start ? 1 : -1) * order;
        case HeaderKey.type:
          return (a.type.id > b.type.id ? 1 : -1) * order;
        case HeaderKey.module:
          return order === 1 ? a.module.localeCompare(b.module) : b.module.localeCompare(a.module);
        case HeaderKey.status:
          return (a.status.id > b.status.id ? 1 : -1) * order;
        case HeaderKey.room:
          const aRooms = a.rooms?.map((room) => room.name).join(', ') ?? '';
          const bRooms = b.rooms?.map((room) => room.name).join(', ') ?? '';
          return order === 1 ? aRooms.localeCompare(bRooms) : bRooms.localeCompare(aRooms);
        case HeaderKey.group:
          const aGroups = a.groups?.map((room) => room.name).join(', ') ?? '';
          const bGroups = b.groups?.map((room) => room.name).join(', ') ?? '';
          return order === 1 ? aGroups.localeCompare(bGroups) : bGroups.localeCompare(aGroups);
        default:
          return 0;
      }
    });
    getItems(currentPage.value, itemsPerPage.value);
  };

  const filterByModule = (text: string) => {
    if (!rawSessions.value) return;
    filteredSessions.value = rawSessions.value.filter((session) =>
      session.module.toLowerCase().includes(text.toLowerCase()),
    );
    currentPage.value = 0;
    getItems(currentPage.value, itemsPerPage.value);
  };

  const getItems = (start: number, perPage: number) => {
    currentPage.value = start;
    itemsPerPage.value = perPage;
    if (!filteredSessions.value) return null;
    sessions.value = filteredSessions.value.slice(start, start + perPage);
  };

  return {
    sessions,
    sessionsCount,
    getData,
    sortSessionData,
    filterByModule,
    getItems,
  };
});
