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

const EventDetails = styled.div`
  color: white;
  font-weight: bold;
  text-align: right;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
  align-items: center;

  @media (max-width: 900px) {
    display: none;
  }
`;

const NavLink = styled(ScrollLink)`
  color: white;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    color: var(--link-hover-color);
  }
`;

const FacebookButton = styled.a`
  background-color: var(--accent-color);
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    background-color: var(--link-hover-color);
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
        <NavLink to="about" smooth duration={500}>
          About
        </NavLink>
        <NavLink to="games" smooth duration={500}>
          Games
        </NavLink>
        <NavLink to="tokens" smooth duration={500}>
          How To Play
        </NavLink>
        <NavLink to="food" smooth duration={500}>
          Food & Drink
        </NavLink>
        <NavLink to="benefits" smooth duration={500}>
          For A Good Cause
        </NavLink>
        <NavLink to="sponsors" smooth duration={500}>
          Sponsors
        </NavLink>
        <FacebookButton
          href="https://www.facebook.com/events/468624162224859"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook Event Page
        </FacebookButton>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
