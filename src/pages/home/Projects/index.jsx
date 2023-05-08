import React from "react";
import { Link } from "react-router-dom";
import css from "./style.module.scss";
import { projects } from "../../../utils/data.js";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";


const Projects = () => {
  const navigate = useNavigate();
  const variants = {
    offscreen: { y: 100, opacity: 0 },
    onscreen: { y: 0, opacity: 1, transition: { type: "spring", duration: 3 } },
  };
  return (
    <div className={css.projectContainer}>
      <p className={css.projectTitle}>Selected work</p>
      <p className={css.projectsubTitle}>A selection of the projects I've worked on alone and in collaboration with talented individuals. Each project represents a unique challenge that has allowed me to hone my skills and grow as a developer.      
    </p>
      <div className={css.projectGrid}>
        {projects.map((project, index) => (
          <>
            <motion.div
              className={css.projectCardContainer}
              key={project.id}
              variants={variants}
              initial={"offscreen"}
              whileInView={"onscreen"}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{scale: 0.9}}             
            >
              <motion.img src={project.logo} alt="logo"  />
              <motion.button
                onClick={() => navigate(`/project/${project.id}`)}
                whileTap={{ scale: 0.9 }}
                className={css.projectButton}
              >
                Details
              </motion.button>           
            </motion.div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Projects;
