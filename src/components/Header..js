import React from "react";
import styled from "styled-components";
import Nav from "./Nav";

const Header = () => {
  return (
    <HeaderStyled>
      <Nav />
    </HeaderStyled>
  );
};

const HeaderStyled = styled.header`
  position: fixed;
  width: 100%;
  z-index: 10;
`;
export default Header;
