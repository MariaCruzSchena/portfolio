import React, {useRef, useEffect} from "react";
import css from "./style.module.scss";
import { motion } from "framer-motion";
import Typed from "typed.js";

const Banner = () => {
  const firstLine = ["h","i", ",", " ", "I","'","m"];
  const secondLine = ["C", "r", "u", "z", " ", "S", "c", "h", "e", "n", "a","."];
  const textRef = useRef(null);

useEffect(() => {
  const options = {
    strings: ["I'm a Full Stack Developer.", 'Welcome to my portfolio!'],
    typeSpeed: 90,
    backDelay: 900,
    backSpeed: 60,    
    loop: true,
  };

  const typed = new Typed(textRef.current, options);

  return () => {
    typed.destroy(); // Destroy Typed.js instance when component unmounts (optional)
  };
}, []);
  console.log(firstLine);
  return (
    <motion.div
      className={css.bannerContainer}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <div className={css.bannerWrapper}>
        {firstLine.map((letter, index) => (
          <motion.span
            className={css.bannerTitle}
            key={`firstLine-${index}`}
            // whileHover={{
            //   scale: [1, 0.8, 1.2, 1],
            //   transition: {
            //     duration: 0.5,
            //     times: [0, 0.2, 0.8, 1],
            //     ease: "easeInOut",
            //   },
            // }}
          >
            {letter === " " ? <>&nbsp;</> : letter}
          </motion.span>
        ))}
      </div>
      <div className={css.bannerWrapper}>
        {secondLine.map((letter, index) => (
          <motion.span
            className={css.bannerTitle}
            key={`secondLine-${index}`}
            // whileHover={{
            //   scale: [1, 0.8, 1.2, 1],
            //   transition: {
            //     duration: 0.5,
            //     times: [0, 0.2, 0.8, 1],
            //     ease: "easeInOut",
            //   },
            // }}
          >
            {letter === " " ? <>&nbsp;</> : letter}
          </motion.span>
        ))}
      </div>

      <div className={css.bannerWrapper}>
        <p className={css.bannerSubtitle} ref={textRef}></p>
      </div>
    </motion.div>
  );
};

export default Banner;
