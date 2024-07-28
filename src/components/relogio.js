import React, { useEffect, useState } from "react";

export default function Relogio() {
  const [dateTime, setDateTime] = useState({
    hours: new Date().getHours(),
    minutes: new Date().getMinutes(),
    seconds: new Date().getSeconds()
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const date = new Date();
      setDateTime({
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds()
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-center pb-5">
      <div className="text-lg font-semibold">
        <span className="mr-2">Horário Local</span> 
        <span>
          {dateTime.hours.toString().padStart(2, '0')}:
          {dateTime.minutes.toString().padStart(2, '0')}:
          {dateTime.seconds.toString().padStart(2, '0')}
        </span>
      </div>
    </div>
  );
}
