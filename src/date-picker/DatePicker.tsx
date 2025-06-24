import moment, { Moment } from "jalali-moment";
import generatePicker from "antd/es/date-picker/generatePicker";
import { generateJalaliConfig } from "../jalali";

// استفاده از Moment به جای Dayjs
const DatePicker = generatePicker<Moment>(generateJalaliConfig);

export default DatePicker;
