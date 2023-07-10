import readingTime from "reading-time";
import { DateTime } from "luxon";

export const getReadingTime = (text: string, locale: string) => {
  const minutes = readingTime(text).minutes;
  // Floor to 1 decimal place
  const minutesRounded = Math.floor(minutes);
  if (locale === "th") {
    return `${minutesRounded} นาที`;
  } else {
    if (minutesRounded > 1) {
      return `${minutesRounded} minutes`;
    } else {
      return `${minutesRounded} minute`;
    }
  }
};

export const getRelativeDate = (date: string, locale: string) => {
  return DateTime.fromISO(date).setLocale(locale).toRelative();
};
