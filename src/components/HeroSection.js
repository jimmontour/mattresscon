import React from "react";
import styled from "styled-components";
import { Link as ScrollLink } from "react-scroll";
import heroBackground from "../images/hero-background.png"; // Ensure you have a hero background image
import heroImage from "../images/hero-logo.png"; // Ensure you have a hero logo image

const HeroSectionContainer = styled.section`
  padding: 100px 20px;
  background: url(${heroBackground}) no-repeat center center/cover;
  color: var(--secondary-color);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const HeroImage = styled.img`
  height: 500px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    height: 600px;
  }

  @media (min-width: 1024px) {
    height: 700px;
  }
`;

const HeroSubHeading = styled.h2`
  font-size: 1.5rem;
  margin: 0 0 20px;
`;

const HeroButtons = styled.div`
  display: flex;
  gap: 20px;
`;

const HeroButton = styled(ScrollLink)`
  background-color: var(--accent-color);
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    background-color: var(--link-hover-color);
  }
`;

const HeroSection = () => {
  return (
    <HeroSectionContainer>
      <HeroImage src={heroImage} alt="Hero Logo" />
      <HeroSubHeading>MattressCon</HeroSubHeading>
      <HeroButtons>
        <HeroButton to="games" smooth duration={500}>
          List of Games
        </HeroButton>
        <HeroButton to="benefits" smooth duration={500}>
          Supporting Habitat For Humanity
        </HeroButton>
      </HeroButtons>
    </HeroSectionContainer>
  );
};

export default HeroSection;
