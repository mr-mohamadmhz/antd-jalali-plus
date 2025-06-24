const locale = {
  name: "fa",
  weekdays: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
  weekdaysShort: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split(
    "_"
  ),
  weekdaysMin: "ی_د_س_چ_پ_ج_ش".split("_"),
  weekStart: 6,
  months:
    "فروردین_اردیبهشت_خرداد_تیر_مرداد_شهریور_مهر_آبان_آذر_دی_بهمن_اسفند".split(
      "_"
    ),
  monthsShort: "فروردین_اردیبهشت_خرداد_تیر_مرداد_شهریور_مهر_آبان_آذر_دی_بهمن_اسفند".split("_"),
  ordinal: (n: number) => n,
  formats: {
    LT: "HH:mm",
    LTS: "HH:mm:ss",
    L: "YYYY/MM/DD",
    LL: "D MMMM YYYY",
    LLL: "D MMMM YYYY HH:mm",
    LLLL: "dddd، D MMMM YYYY HH:mm",
  },
  relativeTime: {
    future: "در %s",
    past: "%s پیش",
    s: "چند ثانیه",
    m: "1 دقیقه",
    mm: "%d دقیقه",
    h: "1 ساعت",
    hh: "%d ساعت",
    d: "1 روز",
    dd: "%d روز",
    M: "1 ماه",
    MM: "%d ماه",
    y: "1 سال",
    yy: "%d سال",
  },
};

export default locale;
