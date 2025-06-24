import moment, { Moment } from "jalali-moment";
import generateCalendar from "antd/es/calendar/generateCalendar";
import { generateJalaliConfig } from "jalali";

const Calendar = generateCalendar<Moment>(generateJalaliConfig);

export default Calendar;
