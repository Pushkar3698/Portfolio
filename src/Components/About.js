import React, { useState, useEffect } from "react";

export const About = () => {
  const [scroll, setscroll] = useState(-50);

  const handelScroll = () => {
    setscroll(window.scrollY * 0.5);
  };

  useEffect(() => {
    window.addEventListener("scroll", handelScroll);

    return () => {
      window.removeEventListener("scroll", handelScroll);
    };
  }, [scroll]);

  return (
    <div className="about-section" style={{ overflow: "hidden" }}>
      <div className="about-text">
        <div className="about-me" style={{ left: scroll }}>
          ABOUT ME
        </div>
        <div className="about-desc">
          Front end developer who cares deeply about user experience. Serious
          passion for UI design and new technologies
        </div>
      </div>
    </div>
  );
};
