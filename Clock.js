import { useState, useEffect } from "react";
import "./gg.css";

export default function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="clock-container">
      <h2>Текущее время</h2>
      <p className="clock-time">{time}</p>
    </div>
  );
}
