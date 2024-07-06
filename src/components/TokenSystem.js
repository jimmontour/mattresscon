import React from "react";
import styled from "styled-components";
import tokenImage from "../images/warhammer-table.png"; // Ensure you have a suitable image

const TokenSystemContainer = styled.div`
  padding: 50px 20px;
  border-bottom: 1px solid #ccc;
  display: flex;
  align-items: center;
  flex-direction: row;
  text-align: left;

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

const TokenDetails = styled.p`
  font-size: 1.2rem;
  margin: 20px 0;
`;

const Highlight = styled.span`
  color: var(--accent-color);
  font-weight: bold;
`;

const TokenSystem = () => {
  return (
    <TokenSystemContainer>
      <TextContainer>
        <h2>No Registration Needed!</h2>
        <TokenDetails>
          There is <Highlight>no admission fee</Highlight> or registration
          needed for the event. Games will be played all day from 10AM to 6PM,
          so you can drop in anytime and join a game. You can participate in one
          of the many games being played at dozens of tables by purchasing
          tokens.
        </TokenDetails>
        <TokenDetails>
          Tokens are available for <Highlight>$5 each</Highlight>. Each game
          requires one token to join.
        </TokenDetails>
        <TokenDetails>
          All proceeds go directly to{" "}
          <Highlight>Habitat For Humanity Buffalo</Highlight>. Enjoy the games
          while supporting a great cause!
        </TokenDetails>
      </TextContainer>
      <ImageContainer>
        <Image src={tokenImage} alt="Token System" />
      </ImageContainer>
    </TokenSystemContainer>
  );
};

export default TokenSystem;
