// "use client";

// import { useEffect, useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";

// const roles = [
//   "Full Stack Developer",
//   "Backend Developer",
//   "Frontend Developer",
// ];

// export default function RoleAnimation() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % roles.length);
//     }, 2500);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="mt-6 h-10 overflow-hidden md:h-12 relative">
//       <AnimatePresence mode="wait" initial={false}>
//         <motion.h2
//           key={currentIndex}
//           initial={{ opacity: 0, x: -100 }}
//           animate={{ opacity: 1, x: 0 }}
//           exit={{ opacity: 0, x: 100 }}
//           transition={{
//             x: {
//               duration: 0.7,
//               ease: [0.22, 1, 0.36, 1],
//             },
//             opacity: {
//               duration: 0.5,
//             },
//           }}
//           className="absolute left-0 top-0 text-2xl font-semibold text-gray-200 md:text-3xl whitespace-nowrap"
//         >
//           {roles[currentIndex]}
//         </motion.h2>
//       </AnimatePresence>
//     </div>
//   );
// }

"use client";

import { useEffect, useState } from "react";

const roles = [
  "Full Stack Developer",
  "Backend Developer",
  "Frontend Developer",
];

export default function RoleAnimation() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = roles[currentRole];

    let speed = isDeleting ? 50 : 100;

    // Jeda ketika tulisan sudah selesai diketik
    if (!isDeleting && displayText === currentText) {
      speed = 1800;
    }

    // Jeda ketika tulisan sudah terhapus
    if (isDeleting && displayText === "") {
      speed = 400;
    }

    const timeout = setTimeout(() => {
      if (!isDeleting && displayText === currentText) {
        setIsDeleting(true);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setCurrentRole((prev) => (prev + 1) % roles.length);
      } else {
        setDisplayText(
          isDeleting
            ? currentText.substring(0, displayText.length - 1)
            : currentText.substring(0, displayText.length + 1)
        );
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  return (
    <h2 className="mt-6 text-2xl font-semibold text-gray-200 md:text-3xl">
      {displayText}
      <span className="ml-1 inline-block h-7 w-0.5 animate-pulse bg-blue-400 align-middle md:h-8" />
    </h2>
  );
}