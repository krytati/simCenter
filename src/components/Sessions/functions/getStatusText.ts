import { SessionStatus } from '@/types/SessionItem.ts'

const localizedStatus: Record<string, Record<SessionStatus, string>> = {
  ru: {
    [SessionStatus.planned]: 'Запланировано',
    [SessionStatus.progress]: 'Идёт',
    [SessionStatus.completed]: 'Завершено',
    [SessionStatus.canceled]: 'Отменено',
  },
};

export const getStatusText = (status: SessionStatus, lang: 'ru' = 'ru'): string =>
  localizedStatus[lang]?.[status] ?? status;
