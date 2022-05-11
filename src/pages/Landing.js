import React from "react";
import Header from "../components/Header.";
import HomeSection from "../components/homeSection/HomeSection";
import AboutSection from "../components/aboutSection/AboutSection";
import styled from "styled-components";

const Landing = () => {
  return (
    <LandingStyled>
      <Header />
      <HomeSection />
      <AboutSection />
    </LandingStyled>
  );
};

const LandingStyled = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
`;

export default Landing;
