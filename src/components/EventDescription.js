import React from "react";
import styled from "styled-components";
import eventImage from "../images/table.jpg"; // Ensure you have an event image
import { Element } from "react-scroll";

const EventDescriptionContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 50px 20px;
  border-bottom: 1px solid #ccc;
  flex-direction: row;
  background-color: black;
  color: white;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const TextContainer = styled.div`
  flex: 1;
  padding: 20px;
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

const Heading = styled.h2`
  color: var(--accent-color); /* Red color */
`;

const Description = styled.p`
  color: white;
  margin-bottom: 15px;
`;

const EventDescription = ({ name }) => {
  return (
    <EventDescriptionContainer name={name}>
      <Element />
      <TextContainer>
        <Heading>What is MattressCon?</Heading>
        <Description>
          <strong>MattressCon</strong> is an exciting day of tabletop gaming
          held inside the Raymour & Flanigan store. Come anytime between{" "}
          <strong>10AM and 6PM on Saturday, July 20th</strong> at the Raymour &
          Flanigan Outlet, <strong>1650 Walden Ave, Cheektowaga</strong>.
        </Description>
        <Description>
          <strong>Why:</strong> This event is organized to support{" "}
          <strong>Habitat for Humanity Buffalo</strong> in their mission to
          build homes and improve lives.
        </Description>
        <Description>
          <strong>Admission:</strong> Free! You can participate in various games
          by purchasing tokens for <strong>$5 each</strong>. Each game requires
          one token, and all proceeds go directly to Habitat for Humanity
          Buffalo.
        </Description>
        <Description>
          <strong>Enjoy:</strong> Beer provided by Bell's, along with pizza,
          drinks, and snacks. All proceeds benefit Habitat for Humanity Buffalo.
        </Description>
      </TextContainer>
      <ImageContainer>
        <Image src={eventImage} alt="Event" />
      </ImageContainer>
    </EventDescriptionContainer>
  );
};

export default EventDescription;
