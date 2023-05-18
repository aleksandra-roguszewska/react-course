import { useState, useEffect } from "react";

const useCounter = (a = 1) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + a);
    }, 1000);

    return () => clearInterval(interval);
  }, [a]);

  return counter;
};

export default useCounter;
