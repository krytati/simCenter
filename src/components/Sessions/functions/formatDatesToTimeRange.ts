export const formatDatesToTimeRange = (start: Date, end: Date, timeZone: string = 'Europe/Moscow'): string => {

  const { day: dayStart,
          month: monthStart,
          year: yearStart,
          hours: hoursStart,
          minutes: minutesStart,
  } = getDateTimeVars(start, timeZone);

  const { day: dayEnd,
          month: monthEnd,
          year: yearEnd,
          hours: hoursEnd,
          minutes: minutesEnd,
  } = getDateTimeVars(end, timeZone);

  if (dayStart === dayEnd && monthStart === monthEnd && yearStart === yearEnd ) {
    return `${dayStart}.${monthStart}.${yearStart}, ${hoursStart}:${minutesStart} - ${hoursEnd}:${minutesEnd}`
  } else {
    return `${dayStart}.${monthStart}.${yearStart} ${hoursStart}:${minutesStart} `
      + `- ${dayEnd}.${monthEnd}.${yearEnd} ${hoursEnd}:${minutesEnd}`
  }
}

const getDateTimeVars = (date: Date, timeZone: string): {
  day: string,
  month: string,
  year: string,
  hours: string,
  minutes: string,
} => {

  const formatter = new Intl.DateTimeFormat('ru-RU', {
    timeZone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });

  const formatted = formatter.formatToParts(date).reduce((acc, part) => {
    if (part.type !== 'literal') acc[part.type] = part.value;
    return acc;
  }, {} as Record<string, string>);

  return {
    day: formatted.day,
    month: formatted.month,
    year: formatted.year,
    hours: formatted.hour,
    minutes: formatted.minute,
  };
};
