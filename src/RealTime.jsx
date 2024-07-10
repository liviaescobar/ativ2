import React, { useState, useEffect } from 'react';

const RealTimeClock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    setShowMessage(true);
    const timeoutId = setTimeout(() => {
      setShowMessage(false);
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div>
      <h1>{currentTime.toLocaleTimeString()}</h1>
      {showMessage && <p>A mensagem vai desaparecer em 5 segundos</p>}
    </div>
  );
};

export default RealTimeClock;
