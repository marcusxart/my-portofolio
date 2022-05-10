import React from "react";
import styled from "styled-components";

const Nav = () => {
  return (
    <NavStyled>
      <h1>
        Marcus<span>X</span>art
      </h1>
      <div className="burger-menu">
        <Line1 />
        <Line2 />
        <Line3 />
      </div>
      <NavList>
        <li>About</li>
        <li>Skills</li>
        <li>Project</li>
        <li>Contact</li>
      </NavList>
    </NavStyled>
  );
};

const NavStyled = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 10vh;
  padding: 0 15px;
  .burger-menu {
    height: 40px;
    width: 40px;
    display: flex;
    padding: 3px 0;
    border-radius: 50%;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }
`;

const NavList = styled.ul`
  list-style: none;
  display: none;
`;

const Line1 = styled.div`
  height: 2.5px;
  width: 30px;
  background: hsla(210, 29%, 24%, 0.3);
`;

const Line2 = styled(Line1)``;
const Line3 = styled(Line1)``;

export default Nav;
