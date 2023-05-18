import React from "react";
import css from "./style.module.scss";
import { motion } from "framer-motion";

const Contact = () => {
  const variants = {
    offscreen: { y: 100, opacity: 0 },
    onscreen: { y: 0, opacity: 1, transition: { type: "spring", duration: 3 } },
  };
  return (
    <motion.div
      id="contact"
      className={css.contactContainer}
      variants={variants}
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: true, amount: 0.2 }}
    >
      <p className={css.contactTitle}>Get in touch</p>
      <p className={css.contactMail}>mariacruzschena@gmail.com</p>
    </motion.div>
  );
};

export default Contact;
