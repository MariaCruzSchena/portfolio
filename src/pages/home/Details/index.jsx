import React from "react";
import { Link } from "react-router-dom";
import css from "./style.module.scss";
import { projects } from "../../../utils/data";
import { useParams } from "react-router-dom";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Details = () => {
  const { id } = useParams();
  const project = projects.find((project) => project.id === Number(id));
  console.log(project);
  return (
    <div className={css.detailsContainer}>
      <div className={css.detailsCWrapperLeft}>
        <img src={project.img} alt="img" className={css.detailsImg} />
        <div>
          <Link to={project.link} target="_blank" className={project.link ? css.detailsLink : css.detailsLinkFalse}><BsFillArrowUpRightCircleFill className={css.detailsIcon} /></Link>
          <Link to={project.github} target="_blank" className={css.detailsLink}><FaGithub className={css.detailsIcon} /></Link>
        </div>
      </div>
      <div className={css.detailsWrapperRight}>
        <p className={css.detailTitle}>
          {project.name} |
        </p>

        <p className={css.detailData}>
          {project.time} | {project.hours} | {project.devs}
        </p>
        <p className={css.detailDescription}>{project.description}</p>
        <div className={css.detailsStackWrapper}>
          <p className={css.detailStack}>
            Backend stack: <span>{project.technologies.back}</span>
          </p>

          <p className={css.detailStack}>
            Frontend stack: <span>{project.technologies.front}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Details;
