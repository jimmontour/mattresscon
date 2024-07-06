import React from "react";
import styled from "styled-components";
import eventImage from "../images/table.jpg"; // Ensure you have an event image

const EventDescriptionContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 50px 20px;
  border-bottom: 1px solid #ccc;
  flex-direction: row;

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

const EventDescription = () => {
  return (
    <EventDescriptionContainer>
      <TextContainer>
        <h2>About the Event</h2>
        <p>
          Join us for an exciting day of tabletop gaming inside the Raymour &
          Flanigan store. This event is for a great cause, supporting Habitat
          for Humanity. Admission is free, and tokens are available for $5 each,
          with each game requiring one token. All proceeds go to Habitat for
          Humanity Buffalo. Enjoy beer provided by Bell's, along with pizza,
          drinks, and snacks.
        </p>
      </TextContainer>
      <ImageContainer>
        <Image src={eventImage} alt="Event" />
      </ImageContainer>
    </EventDescriptionContainer>
  );
};

export default EventDescription;
