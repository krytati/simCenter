import {defineStore} from "pinia";
import type {SessionItem} from "@/types/SessionItem.ts";
import {computed, ref} from "vue";
import {SessionService} from "@/components/Sessions/services/Session.service.ts";
import { HeaderKeys } from '@/types/HeaderKeys.ts'

export const useSessionListStore = defineStore('sessionList', () => {

  const sessions = ref<SessionItem[]|null>(null);
  let rawSessions: SessionItem[] | null;

  const sessionsCount = computed(() => sessions.value?.length ?? 0);

  async function getData() {
    sessions.value = await SessionService.getSessions();
    if (sessions.value) {
      rawSessions = [...sessions.value];
    } else {
      rawSessions = null;
    }
  }

  const sortSessionData = (key: HeaderKeys, order: number) => {
    if (!sessions.value) return;
    sessions.value = sessions.value.sort((a,b) => {
      switch (key) {
        case HeaderKeys.dateTime:
          return (a.start > b.start ? 1 : -1) * order;
        case HeaderKeys.type:
          return (a.type.id > b.type.id ? 1 : -1) * order;
        case HeaderKeys.module:
          return (a.module > b.module ? 1 : -1) * order;
        case HeaderKeys.status:
          return (a.status.id > b.status.id ? 1 : -1) * order;
        default:
          return 0;
      }
    })
  }

  const filterByModule = (text: string) => {
    if (!rawSessions) return;
    sessions.value = rawSessions.filter((session) => session.module.toLowerCase().includes(text.toLowerCase()));
  }

  return {
    sessions,
    sessionsCount,
    getData,
    sortSessionData,
    filterByModule,
  }
})
