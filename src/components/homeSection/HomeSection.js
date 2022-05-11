import React from "react";
import styled from "styled-components";
import { primaryColor } from "../../styles/rootStyled";
import Content from "./Content";
import hero from "../../images/hero.jpg";

const HomeSection = () => {
  return (
    <HomeStyled>
      <Svg>
        <svg
          id="svg-top"
          viewBox="0 0 328 355"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Rectangle 2" filter="url(#filter0_d_1_4)">
            <path
              d="M5 0H324C324 104.341 324 162.841 324 267.182C324 267.182 102.568 363.789 71 343.5C39.4317 323.211 22.7212 280.595 12 210C1.32068 139.68 5 0 5 0Z"
              fill="url(#paint0_linear_1_4)"
              shapeRendering="crispEdges"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_1_4"
              x="0.387665"
              y="0"
              width="327.612"
              height="354.3"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_1_4"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_1_4"
                result="shape"
              />
            </filter>
            <linearGradient
              id="paint0_linear_1_4"
              x1="316.826"
              y1="-8.74491"
              x2="11.4328"
              y2="290.747"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.15837" stopColor="#ED57D3" />
              <stop offset="0.316786" stopColor="#ED57D3" />
              <stop offset="1" stopColor="#0CB5DF" stopOpacity="0.38" />
            </linearGradient>
          </defs>
        </svg>
      </Svg>
      <Content />
      <Hero>
        <img src={hero} alt="" />
      </Hero>
    </HomeStyled>
  );
};

const HomeStyled = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  margin-bottom: 10vh;
  position: relative;
`;

const Svg = styled.div`
  svg {
  }
  #svg-top {
    top: -20px;
    position: absolute;
    left: -10px;
    right: -10px;
    z-index: 1;
  }
`;

const Hero = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  padding: 4rem 0 0;
  img {
    width: 100%;
  }
`;

export default HomeSection;
