import React from "react";
import styled from "styled-components";
import myself from "../../images/myself.png";

const AboutSection = () => {
  return (
    <AboutStyled>
      <Content>
        <div className="description">
          <h2>About Me</h2>
          <p>
            Hi, I'm Chinonso Marcarous Emerernwa from Nigeria, I'm a self-taught
            web-developer with a creative mindset, I enjoy creating things that
            live on the internet. My interest in web development started out of
            curiosity. I always wanted to know the web works and how is been
            creating,I like to craft solid and scalable frontend products with
            great user experiences.
          </p>
        </div>
      </Content>
      <div className="img-box">
        <img src={myself} alt="" />
      </div>
      <Svg>
        <svg
          viewBox="0 0 330 575"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_28_9)">
            <path
              d="M5 114.515C4.99998 18.6429 266.202 -44.4921 301.897 38.5187C337.592 121.53 334.418 478.917 274.787 549.444C215.156 619.972 215.389 424.928 128.042 474.618C40.6947 524.307 5.00002 210.386 5 114.515Z"
              fill="url(#paint0_linear_28_9)"
              shape-rendering="crispEdges"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_28_9"
              x="0"
              y="0"
              width="330"
              height="575"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="5" />
              <feGaussianBlur stdDeviation="2.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_28_9"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_28_9"
                result="shape"
              />
            </filter>
            <linearGradient
              id="paint0_linear_28_9"
              x1="183.24"
              y1="-1.2329"
              x2="-89.2275"
              y2="366.97"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#F72F2F" />
              <stop offset="1" stop-color="#ED57D3" stop-opacity="0.98" />
            </linearGradient>
          </defs>
        </svg>
      </Svg>
    </AboutStyled>
  );
};

const AboutStyled = styled.section`
  position: relative;
  overflow-x: hidden;
  width: 100%;
  z-index: 3;
  min-height: 100vh;
  .img-box {
    z-index: 2;
    position: relative;
    padding: 40px;
    border-radius: 100%;
    margin: auto;
    overflow: hidden;
    img {
      width: 100px;
      border-radius: 100%;
      object-fit: cover;
      height: 100px;
    }
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  padding: 0 2.5rem;
  .description {
    p {
      background: pink;
      letter-spacing: 2px;
      font-size: 1.1rem;
    }
  }
`;
const Svg = styled.div`
  svg {
    position: absolute;
    z-index: 1;
    top: 0;
    left: -20px;
  }
`;

export default AboutSection;
