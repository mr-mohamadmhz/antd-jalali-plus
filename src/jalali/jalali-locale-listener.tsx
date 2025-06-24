import React, { FC } from "react";
import useJalaliLocaleListener from "./jalali-locale-listener-hook";

const JalaliLocaleListener: FC = () => {
  useJalaliLocaleListener();
  return null; // بهتره به جای <></> این رو استفاده کنیم وقتی رندر نداریم
};

export default JalaliLocaleListener;
