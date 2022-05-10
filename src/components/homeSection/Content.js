import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const Content = () => {
  return (
    <ContentStyled>
      <Title>
        <p>Hello I'm</p>
        <h2>
          <span>Chinonso</span> <span>Emerenwa</span>
        </h2>
        <p>I'm a self-taught frontend web developer</p>
      </Title>
      <ButtonBox>
        <svg
          width="100"
          height="90"
          viewBox="0 0 74 74"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="37"
            cy="37"
            r="36"
            transform="rotate(-25.8116 37 37)"
            fill="url(#paint0_linear_20_6)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_20_6"
              x1="37"
              y1="1"
              x2="37"
              y2="73"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#0CB5DF" />
              <stop offset="1" stop-color="#0CB5DF" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
        <Button>
          <p>Download Resume</p>
        </Button>
      </ButtonBox>
    </ContentStyled>
  );
};

const ContentStyled = styled.div`
  padding: 0 0.5rem 0 2.5rem;
  padding-top: 10vh;
  z-index: 2;
`;

const Title = styled.div`
  h2 {
    margin-bottom: 0.7rem;
  }

  span {
    display: block;
  }
`;

const ButtonBox = styled.div`
  display: inline-block;
  position: relative;
  border-radius: 7px;
  overflow: hidden;
  margin-top: 15px;
  box-shadow: 2px 2px 7px 2px #683c75;
  svg {
    z-index: 1;
    position: absolute;
    right: -30px;
    opacity: 0.7;
    bottom: -30px;
  }
`;

const Button = styled.button`
  border: 0;
  outline: 0;
  padding: 0.8rem 1rem;
  background: #e84bee;
  color: white;
  font-weight: 700;
  p {
    font-size: 1rem;
    position: sticky;
    z-index: 3;
  }
`;

export default Content;
