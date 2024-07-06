import React from "react";
import styled from "styled-components";

const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  width: 300px;
  margin: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 20px;
`;

const CardTitle = styled.h3`
  margin: 0 0 10px;
  font-size: 1.5rem;
`;

const CardDetail = styled.p`
  margin: 5px 0;
  font-size: 1rem;
  color: #666;
`;

const GameCard = ({ image, title, players, gameplay, additional }) => {
  return (
    <Card>
      <CardImage src={image} alt={title} />
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDetail>
          <strong>Players:</strong> {players}
        </CardDetail>
        <CardDetail>
          <strong>Gameplay:</strong> {gameplay}
        </CardDetail>
        {additional && (
          <CardDetail>
            <strong>Additional Info:</strong> {additional}
          </CardDetail>
        )}
      </CardContent>
    </Card>
  );
};

export default GameCard;
