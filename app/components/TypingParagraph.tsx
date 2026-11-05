"use client";

import { useEffect, useState } from "react";

const text = `I'm a Full Stack Developer with experience 
in developing websites and web applications. I enjoy building user-friendly interfaces, designing efficient backend systems, and creating solutions that solve real-world problems.
I have worked on various projects, including school websites,
booking systems, and school fee payment platforms. I always strive
to write clean, maintainable, and scalable code.`;

export default function TypingParagraph() {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      index++;

      setDisplayText(text.substring(0, index));

      if (index >= text.length) {
        clearInterval(interval);
      }
    }, 35);

    return () => clearInterval(interval);
  }, []);

  return (
    <p className="mt-6 leading-8 text-gray-400">
      {displayText}
      <span className="ml-1 inline-block h-4 w-0.5 animate-pulse bg-blue-400 align-middle" />
    </p>
  );
}
