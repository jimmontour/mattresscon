import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { Link as ScrollLink } from "react-scroll";
import heroImage from "../images/logo.png"; // Ensure you have a hero logo image
import heroBackground1 from "../images/herogg1.jpg";
import heroBackground2 from "../images/herobg2.jpg";
import heroBackground3 from "../images/herobg3.jpg";
import heroBackground4 from "../images/herobg4.webp";

const backgrounds = [
  heroBackground1,
  heroBackground2,
  heroBackground3,
  heroBackground4,
];

const HeroSectionContainer = styled.section`
  position: relative;
  padding: 100px 20px;
  background: url(${(props) => props.background}) no-repeat center center/cover;
  background-size: cover;
  color: var(--secondary-color);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    z-index: 1;
  }
`;

const ContentContainer = styled.div`
  position: absolute;
  top: 20px; /* Adjust this value as needed */
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
`;

const HeroImage = styled.img`
  height: 150px;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    height: 200px;
  }

  @media (min-width: 1024px) {
    height: 250px;
  }
`;

const SmallText = styled.h3`
  font-size: 0.8rem;
  margin: 0 0 5px; /* Reduced margin to tighten spacing */
  color: white;
`;

const LargeText = styled.h1`
  font-size: 4rem;
  margin: 0 0 5px; /* Reduced margin to tighten spacing */
  color: white;
  font-weight: bold;

  @media (min-width: 768px) {
    font-size: 4rem;
  }

  @media (min-width: 1024px) {
    font-size: 6rem;
  }
`;

const SubHeading = styled.h2`
  font-size: 1.2rem;
  margin: 0 0 10px; /* Reduced margin to tighten spacing */
  color: var(--primary-color);
`;

const EventDetails = styled.div`
  font-size: 1rem;
  margin-bottom: 15px; /* Reduced margin to tighten spacing */
  color: white;
`;

const HeroSection = () => {
  const [backgroundIndex, setBackgroundIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <HeroSectionContainer background={backgrounds[backgroundIndex]}>
      <ContentContainer>
        <HeroImage src={heroImage} alt="Hero Logo" />
        <SmallText>Raymour & Flanigan and Harlequin Hobby Present</SmallText>
        <LargeText>MATTRESSCON</LargeText>
        <SubHeading>TABLE TOP GAMING FOR A GOOD CAUSE</SubHeading>
        <EventDetails>
          <p>Saturday, July 20th, 10AM - 6PM</p>
          <p>Raymour & Flanigan Outlet, 1650 Walden Ave, Cheektowaga</p>
          <p>Free Admission. $5 Per Game. No Registration Required!</p>
        </EventDetails>
      </ContentContainer>
    </HeroSectionContainer>
  );
};

export default HeroSection;
