import React from "react";
import me from "../../../assets/images/me.JPG";
import css from "./style.module.scss";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const About = () => {
  const aboutVariants = {
    offscreen: { y: 100, opacity: 0 },
    onscreen: { y: 0, opacity: 1, transition: { type: "spring", duration: 3 } },
  };

  return (
    <motion.div
      className={css.aboutContiner}
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: true, amount: 0.3 }}
      variants={aboutVariants}
    >
      <img src={me} alt="me" className={css.aboutImg} />
      <div className={css.aboutWrapper}>
        <p className={css.aboutTitle}>About me</p>
        <p className={css.aboutContent}>
          I am a Licensed Nutritionist, but I discovered my true calling in the
          world of technology. As a naturally resourceful person, I am motivated
          by the challenge of addressing and solving problems effectively and
          creatively. With my experience in the health field, I have learned
          valuable skills such as attention to detail, empathy, adaptability to
          change, and stress management, which I apply to every project I
          undertake. My ultimate goal is to collaborate with multidisciplinary
          teams to create innovative solutions that meet the client's needs and
          have a positive impact on the industry.
        </p>
        <AnchorLink href="#contact">
        <button className={css.aboutBtn}>Contact</button>
        </AnchorLink>
      </div>
      
    </motion.div>
  );
};

export default About;
