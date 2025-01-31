import { formatTimestamp } from "@/utils/dateUtils";
import React from "react";

const TimeStamp = ({
  timeStamp,
  addClass,
}: {
  timeStamp: string;
  addClass: string;
}) => {
  return (
    <span
      className={`${addClass} text-xs font-semibold px-2 py-1 rounded-full`}>
      {formatTimestamp(timeStamp)}
    </span>
  );
};

export default TimeStamp;
