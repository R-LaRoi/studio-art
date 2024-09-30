import { AnimatePresence, motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";

const variants: Variants = {
  initial: { opacity: 0, scale: 1 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 1.5 },
};

const textArray = ['studio_', 'rachel', 'stroy', 'artist'];

export default function TextAnimation() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [text, setText] = useState(textArray[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % textArray.length;
        setText(textArray[nextIndex]);
        return nextIndex;
      });
    }, 1500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <AnimatePresence mode="wait">
        <motion.h1
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          key={currentIndex}
        >
          {text}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
}