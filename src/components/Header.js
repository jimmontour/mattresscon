import React from "react";
import styled from "styled-components";
import { Link as ScrollLink } from "react-scroll";
import logo from "../images/logo.png"; // Ensure you have a logo file

const HeaderContainer = styled.header`
  background-color: black;
  padding: 20px;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

const NavLink = styled(ScrollLink)`
  color: white;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    color: var(--link-hover-color);
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <img src={logo} alt="MattressCon Logo" style={{ height: "50px" }} />
        <h1 style={{ color: "white", margin: 0 }}>MATTRESSCON</h1>
      </LogoContainer>
      <Nav>
        <NavLink to="games" smooth duration={500}>
          Games
        </NavLink>
        <NavLink to="tokens" smooth duration={500}>
          Token System
        </NavLink>
        <NavLink to="food" smooth duration={500}>
          Food & Drinks
        </NavLink>
        <NavLink to="benefits" smooth duration={500}>
          Benefits
        </NavLink>
        <NavLink to="sponsors" smooth duration={500}>
          Sponsors
        </NavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
