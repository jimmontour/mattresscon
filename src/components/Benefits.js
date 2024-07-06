import React from "react";
import styled from "styled-components";
import habitatImage from "../images/habitat.webp"; // Ensure you have a habitat image
import { Element } from "react-scroll";

const BenefitsContainer = styled.div`
  padding: 50px 20px;
  border-bottom: 1px solid #ccc;
  display: flex;
  align-items: center;
  flex-direction: row;
  text-align: left;
  background-color: #9c342e;
  color: white;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const TextContainer = styled.div`
  flex: 1;
  padding: 20px;
  color: white;

  h2 {
    color: white;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
`;

const Benefits = ({ name }) => {
  return (
    <BenefitsContainer name={name}>
      <TextContainer>
        <h2>Gaming for a Good Cause</h2>
        <p>
          This event is organized to benefit Habitat for Humanity Buffalo.
          Habitat for Humanity Buffalo is a non-profit organization that helps
          families build and improve places to call home. Their vision is a
          world where everyone has a decent place to live.
        </p>
        <p>
          By gaming at this event, you're directly supporting Habitat for
          Humanity Buffalo's mission. The funds raised will help build and
          renovate homes for families in need, providing them with safe,
          affordable housing. Every token purchased goes a long way in making a
          significant difference in our community.
        </p>
        <p>
          Join us in making a positive impact while enjoying a day of fun and
          games. Together, we can help build a better future for everyone in
          Buffalo.
        </p>
      </TextContainer>
      <ImageContainer>
        <Image src={habitatImage} alt="Habitat for Humanity Buffalo" />
      </ImageContainer>
    </BenefitsContainer>
  );
};

export default Benefits;
