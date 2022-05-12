import React from "react";
import me from "../../img/me.png";
import "./about.css";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={me} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          My name is Chinonso Marcarous Emerenwa, I'm a self-taught passionate
          FrontEnd developer from Nigeria
        </p>
        <p className="a-desc">
          I enjoy creating things that live on the internet. My interset in web
          development started out of curiosity. I always wanted to know how the
          web works
        </p>
      </div>
    </div>
  );
};

export default About;
