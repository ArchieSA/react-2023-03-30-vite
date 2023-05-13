import React, { useEffect, useRef, useState } from "react";

export const Timer = () => {
  const time = useRef(0);
  const [isHelloVisible, setIsHelloVisible] = useState(false);

  useEffect(() => {
    setInterval(() => {
      time.current = time.current + 1;
      if (time.current > 10) {
        setIsHelloVisible(true);
      }
    }, 1000);
  }, []);
  return <div>{isHelloVisible && <span>Hello Students</span>}</div>;
};
