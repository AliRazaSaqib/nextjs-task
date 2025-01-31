"use client";

import TimeStamp from "./TimeStamp";

interface CardProps {
  title: string;
  description: string;
  timeStamp: string;
}

const Card: React.FC<CardProps> = ({ title, description, timeStamp }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 border border-gray-200 max-w-3xl w-full">
      <div className="grid grid-cols-[auto,1fr] gap-3">
        {timeStamp && (
          <TimeStamp
            timeStamp={timeStamp}
            addClass="bg-blue-500 text-white px-3 py-1 rounded-lg text-xs max-h-6"
          />
        )}
        <h2 className="font-semibold text-lg">{title}</h2>
      </div>

      <div className="grid grid-cols-[auto,1fr] gap-3 mt-2">
        {timeStamp && (
          <TimeStamp
            timeStamp={timeStamp}
            addClass="bg-gray-300 text-gray-800 px-3 py-1 rounded-lg text-xs max-h-6"
          />
        )}
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default Card;
