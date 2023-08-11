"use client";

import { useEffect, useState } from "react";

const ScrollIndicator = () => {
  const [scrollTop, setScrollTop] = useState(0);

  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    const heigth =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = (winScroll / heigth) * 100;

    setScrollTop(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="progress-wrapper">
      <div className="progress-bar" style={{ width: `${scrollTop}%` }}></div>
    </div>
  );
};

export default ScrollIndicator;
