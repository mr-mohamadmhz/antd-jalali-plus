import moment, { Moment } from "jalali-moment";
import * as React from "react";
import DatePicker from "../date-picker/DatePicker";
import type { PickerProps } from "antd/es/date-picker/generatePicker";

// 👇 Moment رو استفاده کن چون DatePicker هم با Moment ساخته شده
export interface TimePickerProps extends Omit<PickerProps<Moment>, "picker"> {}

const TimePicker = React.forwardRef<any, TimePickerProps>((props, ref) => {
  return (
    <DatePicker
      {...props}
      picker="time"
      mode={undefined}
      ref={ref}
    />
  );
});

TimePicker.displayName = "TimePicker";

export default TimePicker;
