import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import css from "./style.module.scss";
import { Link } from "react-router-dom";
import { FaGithub, FaFileDownload } from "react-icons/fa";
import { TfiLinkedin } from "react-icons/tfi";
import { ImArrowRight2 } from "react-icons/im";
import { AiTwotoneHome } from "react-icons/ai";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  console.log(path);
  return (
    <div className={css.navbarContainer}>
      <div className={css.navbarIconWrapper}>
        <Link to="/" >
          <AiTwotoneHome className={css.navbarIcon} />
        </Link>
        <Link
          to="https://www.linkedin.com/in/mariacruzschena/"
          
          target="_blank"
        >
          <TfiLinkedin className={css.navbarIcon} />
        </Link>
        <Link
          to="https://github.com/MariaCruzSchena"
       
          target="_blank"
        >
          <FaGithub className={css.navbarIcon} />
        </Link>
        <a href="/MariaCruzSchena-CV-English.pdf" 
        download="MariaCruzSchena-CV-English.pdf"
        target="_blank"
        rel="noreferrer"><FaFileDownload className={css.navbarIcon}/></a>
      </div>

      <AnchorLink
        className={
          path === "project" ? css.navBarScrollDiff : css.navbarScrollWrapper
        }
      >
        {/* <span className={css.navbarSpanScroll}>Scroll</span> */}
        <span className={css.navbarSpanArrow}>
          <ImArrowRight2 />
        </span>
      </AnchorLink>
    </div>
  );
};

export default Navbar;
