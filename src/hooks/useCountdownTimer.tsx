import { useEffect, useState } from 'react';

interface CountdownTimerState {
  minutes: number;
  seconds: number;
  completed: boolean;
}

const useCountdownTimer = (minutes: number): CountdownTimerState => {
  const [timer, setTimer] = useState<CountdownTimerState>({
    minutes: minutes,
    seconds: minutes * 60,
    completed: false,
  });

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (timer.seconds > 0) {
      intervalId = setInterval(() => {
        setTimer((prevTimer) => {
          const newSeconds = prevTimer.seconds - 1;
          return {
            ...prevTimer,
            seconds: newSeconds,
            completed: newSeconds === 0,
          };
        });
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [timer.seconds]);

  return timer;
};

export default useCountdownTimer;
