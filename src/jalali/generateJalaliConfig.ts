// generateJalaliConfig.ts - Using jalali-moment instead of dayjs + jalaliday
import moment, { Moment } from "jalali-moment";
import { noteOnce } from "rc-util/lib/warning";
import type { GenerateConfig } from "rc-picker/es/generate";

// Load Persian locale
moment.locale("fa");

// Mapping for i18n locales
const localeMap: Record<string, string> = {
  en_GB: "en-gb",
  en_US: "en",
  zh_CN: "zh-cn",
  zh_TW: "zh-tw",
  fa_IR: "fa",
};

const parseLocale = (locale: string): string => {
  const mapLocale = localeMap[locale];
  return mapLocale || locale.split("_")[0];
};

const parseNoMatchNotice = () => {
  noteOnce(false, "Not match any format. Please help to fire an issue about this.");
};

const generateJalaliConfig: GenerateConfig<Moment> = {
  // Getters
  getNow: () => moment().startOf("day"),
  getFixedDate: (string) => moment(string, "YYYY-MM-DD").startOf("day"),
  getEndDate: (date) => date.clone().endOf("jMonth"),
  getWeekDay: (date) => date.locale("en").weekday(),
  getYear: (date) => date.jYear(),
  getMonth: (date) => date.jMonth(),
  getDate: (date) => date.jDate(),
  getHour: (date) => date.hour(),
  getMinute: (date) => date.minute(),
  getSecond: (date) => date.second(),
  getMillisecond: (date) => date.millisecond(),

  // Setters
  setYear: (date, year) => date.clone().jYear(year),
  setMonth: (date, month) => date.clone().jMonth(month),
  setDate: (date, num) => date.clone().jDate(num),
  setHour: (date, hour) => date.clone().hour(hour),
  setMinute: (date, minute) => date.clone().minute(minute),
  setSecond: (date, second) => date.clone().second(second),
  setMillisecond: (date, ms) => date.clone().millisecond(ms),

  // Adders
  addYear: (date, diff) => date.clone().add(diff, "jYear"),
  addMonth: (date, diff) => date.clone().add(diff, "jMonth"),
  addDate: (date, diff) => date.clone().add(diff, "day"),

  // Compare
  isAfter: (date1, date2) => date1.isAfter(date2),
  isValidate: (date) => date.isValid(),

  // Locale support
  locale: {
    getWeekFirstDate: (locale, date) => date.clone().locale(parseLocale(locale)).weekday(0),
    getWeekFirstDay: (locale) => moment().locale(parseLocale(locale)).localeData().firstDayOfWeek(),
    getWeek: (locale, date) => date.clone().locale(parseLocale(locale)).week(),
    getShortWeekDays: (locale) => moment().locale(parseLocale(locale)).localeData().weekdaysMin(),
    getShortMonths: (locale) => moment().locale(parseLocale(locale)).localeData().monthsShort(),
    format: (locale, date, formatStr) => date.clone().locale(parseLocale(locale)).format(formatStr),
    parse: (locale, text, formats): Moment | null => {
      const localeStr = parseLocale(locale);
      for (let i = 0; i < formats.length; i++) {
        const format = formats[i];
        const parsed = moment(text, format, localeStr).startOf("day");
        if (parsed.isValid()) return parsed;
      }
      parseNoMatchNotice();
      return null;
    },
  },
};

export default generateJalaliConfig;
