import React from "react";
import css from "./style.module.scss";
import { ImHtmlFive, ImCss3 } from "react-icons/im";
import { IoLogoSass, IoLogoJavascript, IoLogoReact } from "react-icons/io5";
import {
  SiTypescript,
  SiBootstrap,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiSequelize,
  SiMongodb,
  SiSocketdotio,
  SiGithub,
  SiDocker,
  SiLinux,
  SiScrumalliance,
} from "react-icons/si";
import { TbBrandNextjs, TbGitMerge } from "react-icons/tb";
import { motion } from "framer-motion";

const Stack = () => {
  return (
    <div class={css.stackContainer}>
      <p class={css.stackTitle}>My stack</p>
      <div class={css.stackGrid}>
        <motion.div class={css.stackWrapper}   whileHover={{scale: 0.9}}  >
          <ImHtmlFive class={css.stackIcon} />{" "}
          <span class={css.stackName}>HTML</span>
        </motion.div>
        <motion.div class={css.stackWrapper} whileHover={{scale: 0.9}}>
          <ImCss3 class={css.stackIcon} />{" "}
          <span class={css.stackName}>CSS</span>
        </motion.div>
        <motion.div class={css.stackWrapper} whileHover={{scale: 0.9}}>
          <IoLogoSass class={css.stackIcon} />{" "}
          <span class={css.stackName}>Sass</span>
        </motion.div>
        <motion.div class={css.stackWrapper} whileHover={{scale: 0.9}}>
          <IoLogoJavascript class={css.stackIcon} />{" "}
          <span class={css.stackName}>Javascript</span>
        </motion.div>
        <motion.div class={css.stackWrapper} whileHover={{scale: 0.9}}>
          <SiTypescript class={css.stackIcon} />{" "}
          <span class={css.stackName}>Typescript</span>
        </motion.div>
        <motion.div class={css.stackWrapper} whileHover={{scale: 0.9}}>
          <IoLogoReact class={css.stackIcon} />{" "}
          <span class={css.stackName}>React</span>
        </motion.div>
        <motion.div class={css.stackWrapper} whileHover={{scale: 0.9}}>
          <TbBrandNextjs class={css.stackIcon} />{" "}
          <span class={css.stackName}>Next js</span>
        </motion.div>
        <motion.div class={css.stackWrapper} whileHover={{scale: 0.9}}>
          <span class={css.stackName}>Material UI</span>
        </motion.div>
        <motion.div class={css.stackWrapper} whileHover={{scale: 0.9}}>
          <span class={css.stackName}>Semantic UI</span>
        </motion.div>
        <motion.div class={css.stackWrapper} whileHover={{scale: 0.9}}>
          <SiBootstrap class={css.stackIcon} />{" "}
          <span class={css.stackName}>Bootstrap</span>
        </motion.div>
        <motion.div class={css.stackWrapper} whileHover={{scale: 0.9}}>
          <SiTailwindcss class={css.stackIcon} />{" "}
          <span class={css.stackName}>Tailwind</span>
        </motion.div>
        <motion.div class={css.stackWrapper} whileHover={{scale: 0.9}}>
          <SiNodedotjs class={css.stackIcon} />{" "}
          <span class={css.stackName}>Node.js</span>
        </motion.div>
        <motion.div class={css.stackWrapper} whileHover={{scale: 0.9}}>
          <SiExpress class={css.stackIcon} />{" "}
          <span class={css.stackName}>Express.js</span>
        </motion.div>
        <motion.div class={css.stackWrapper} whileHover={{scale: 0.9}}>
          <SiSequelize class={css.stackIcon} />{" "}
          <span class={css.stackName}>Sequelize</span>
        </motion.div>
        <motion.div class={css.stackWrapper} whileHover={{scale: 0.9}}>
          <SiMongodb class={css.stackIcon} />{" "}
          <span class={css.stackName}>Mongo DB</span>
        </motion.div>
        <motion.div class={css.stackWrapper} whileHover={{scale: 0.9}}>
          <span class={css.stackName}>Mongoose</span>
        </motion.div>
        <motion.div class={css.stackWrapper} whileHover={{scale: 0.9}}>
          <SiSocketdotio class={css.stackIcon} />{" "}
          <span class={css.stackName}>Socket.io</span>
        </motion.div>
        <motion.div class={css.stackWrapper} whileHover={{scale: 0.9}}>
          <TbGitMerge class={css.stackIcon} />{" "}
          <span class={css.stackName}>Git</span>
        </motion.div>
        <motion.div class={css.stackWrapper} whileHover={{scale: 0.9}}>
          <SiGithub class={css.stackIcon} />{" "}
          <span class={css.stackName}>Github</span>
        </motion.div>
        <motion.div class={css.stackWrapper} whileHover={{scale: 0.9}}>
          <SiDocker class={css.stackIcon} />{" "}
          <span class={css.stackName}>Docker</span>
        </motion.div>
        <motion.div class={css.stackWrapper} whileHover={{scale: 0.9}}>
          <SiLinux class={css.stackIcon} />{" "}
          <span class={css.stackName}>Linux</span>
        </motion.div>
        <motion.div class={css.stackWrapper} whileHover={{scale: 0.9}}>
          <SiScrumalliance class={css.stackIcon} />{" "}
          <span class={css.stackName}>SCRUM</span>
        </motion.div>
      </div>
    </div>
  );
};

export default Stack;
