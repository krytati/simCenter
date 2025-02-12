import { SessionType } from '@/types/SessionItem.ts'

const localizedType: Record<string, Record<SessionType, string>> = {
  ru: {
    [SessionType.accreditation]: 'Аккредитация',
    [SessionType.lesson]: 'Урок',
    [SessionType.examination]: 'Экзамен',
  },
};

export const getTypeText = (sessionType: SessionType, lang: 'ru' = 'ru'): string =>
  localizedType[lang]?.[sessionType] ?? sessionType;
