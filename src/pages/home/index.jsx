import React from "react";
// import Navbar from "../../layouts/navbar";
import css from "./style.module.scss";
import Banner from "./Banner ";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Stack from "./Stack"

const Home = () => {
  return (
    // <div className={css.homeContainer}>
    //   {/* <Navbar /> */}
      <div className={css.homeContent}>
        <Banner />
        <About />
        <Projects />
        <Stack/>
        <Contact/>
        
        
      </div>
    //</div>
  );
};

export default Home;
