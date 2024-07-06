import React from "react";
import styled from "styled-components";
import pizzaImage from "../images/pizza.jpg"; // Ensure you have a pizza image
import snacksImage from "../images/pizza.jpg"; // Ensure you have a snacks image
import drinksImage from "../images/drinks.png"; // Ensure you have a drinks image
import beerImage from "../images/beer.jpg"; // Ensure you have a beer image
import { Element } from "react-scroll";

const FoodAndDrinksContainer = styled.div`
  padding: 50px 20px;
  border-bottom: 1px solid #ccc;
  text-align: center;
  background-color: lightgrey;
  color: black;
`;

const ImageGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

const ImageContainer = styled.div`
  flex: 1 1 calc(25% - 40px);
  max-width: calc(25% - 40px);
  margin: 10px;
  border-radius: 8px;
  overflow: hidden;

  @media (max-width: 768px) {
    flex: 1 1 calc(50% - 40px);
    max-width: calc(50% - 40px);
  }

  @media (max-width: 480px) {
    flex: 1 1 100%;
    max-width: 100%;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const FoodAndDrinks = ({ name }) => {
  return (
    <FoodAndDrinksContainer name={name}>
      <h2>Food & Drinks</h2>
      <p>
        Enjoy a variety of delicious food and beverages available at the event.
        We will have pizza, snacks, pop, water, and beer provided by Bell's.
        There's something for everyone to enjoy!
      </p>
      <ImageGrid>
        <ImageContainer>
          <Image src={pizzaImage} alt="Pizza" />
        </ImageContainer>

        <ImageContainer>
          <Image src={drinksImage} alt="Drinks" />
        </ImageContainer>
        <ImageContainer>
          <Image src={beerImage} alt="Beer" />
        </ImageContainer>
      </ImageGrid>
    </FoodAndDrinksContainer>
  );
};

export default FoodAndDrinks;
