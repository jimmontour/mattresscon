import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Section from "../components/Section";
import Footer from "../components/Footer";
import GameCard from "../components/GameCard";
import EventDescription from "../components/EventDescription";
import TokenSystem from "../components/TokenSystem";
import FoodAndDrinks from "../components/FoodAndDrinks";
import Benefits from "../components/Benefits";
import Sponsors from "../components/Sponsors";
import Warhammer from "../images/cards/warhammer.jpeg";
import ageofsigmar from "../images/cards/ageofsigmar.webp";
import lordoftherings from "../images/cards/lordoftherings.jpg";
import dnd from "../images/cards/dnd.jpg";
import marvel from "../images/cards/marvel.jpeg";
import necromunda from "../images/cards/necromunda.jpg";

const LandingPageContainer = styled.div`
  text-align: center;
  padding: 0;
  margin: 0;
  width: 100%;
`;

const GameCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  justify-items: center;
  padding: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const games = [
  {
    image: Warhammer,
    title: "Warhammer 40K",
    players: "2-4",
    gameplay: "Miniature war game",
    additional:
      "Set in a dystopian science fantasy universe in the 41st Millennium.",
  },
  {
    image: lordoftherings,
    title: "Lord of the Rings: Journeys in Middle-earth",
    players: "1-5",
    gameplay: "Cooperative adventure game",
    additional:
      "Players take on the roles of heroes from J.R.R. Tolkien's novels.",
  },
  {
    image: ageofsigmar,
    title: "Age of Sigmar",
    players: "2-4",
    gameplay: "Miniature war game",
    additional:
      "Set in the Mortal Realms, where gods, heroes, and monsters battle for supremacy.",
  },
  {
    image: dnd,
    title: "Dungeons & Dragons",
    players: "3-6",
    gameplay: "Role-playing game",
    additional:
      "Players create characters and embark on adventures in a fantasy setting.",
  },
  {
    image: necromunda,
    title: "Necromunda",
    players: "2-4",
    gameplay: "Skirmish tabletop war game",
    additional:
      "Players control gangs battling for dominance in the Underhive.",
  },
  {
    image: marvel,
    title: "Marvel Crisis Protocol",
    players: "2",
    gameplay: "Miniature skirmish game",
    additional:
      "Players assemble teams of Marvel superheroes and villains to battle in a skirmish format.",
  },
];

const LandingPage = () => {
  return (
    <LandingPageContainer>
      <Header />
      <HeroSection />

      <EventDescription name="about" title="About" />

      <Section name="games" title="Games">
        <p>
          Including Warhammer 40K, Lord of the Rings, Age of Sigmar, Dungeons
          and Dragons, Necromunda, Marvel Crisis Protocol, Miniature Painting,
          Board Games, Trivia, and much more!
        </p>
        <GameCardContainer>
          {games.map((game, index) => (
            <GameCard
              key={index}
              image={game.image}
              title={game.title}
              players={game.players}
              gameplay={game.gameplay}
              additional={game.additional}
            />
          ))}
        </GameCardContainer>
      </Section>

      <TokenSystem name="tokens" title="How To Play" />

      <FoodAndDrinks name="food" title="Food & Drink" />

      <Benefits name="benefits" title="For A Good Cause" />

      <Sponsors name="sponsors" title="Sponsors" />

      <Footer />
    </LandingPageContainer>
  );
};

export default LandingPage;
