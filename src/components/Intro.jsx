import MainSkills from "./snippets/MainSkills";
import profilePic from "../assets/icons/profilePic.jpeg";
import video1 from "../assets/gifs/video1.gif"
import { useEffect, useRef } from "react";
const Intro = () => {

  return (
    <section
      className="intro"
      data-aos="fade-down"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="1000"
      id="home"
    >
      <div className="left-block">
        <h1>
          <p
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-easing="ease-out-cubic"
          >
            Hello<span>.</span>{" "}
          </p>
          <p
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-easing="ease-out-cubic"
          >
            I am
          </p>
          <p
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-easing="ease-out-cubic"
            id="messenger"
          >
            NITHIN
          </p>
        </h1>
        <p
          className="title"
          data-aos="fade-down"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
        >
          {" "}
          A Freelance Web Developer
        </p>
        
        <MainSkills />
        <button className="ctme">
          <a href="#contact">Contact Me</a>
        </button>
      </div>
      <div className="right-block pic" data-aos="zoom-in-left" data-aos-duration="1500">
      <img src={video1} alt="" />
     
      </div>
    </section>
  );
};

export default Intro;
