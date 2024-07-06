import React from "react";
import styled from "styled-components";
import raymourLogo from "../images/sponsors/Raymour.png"; // Ensure you have sponsor logos
import harlequinLogo from "../images/sponsors/harlequin.jpg";
import bellsLogo from "../images/sponsors/bells.png";
import habitatLogo from "../images/sponsors/habitat.png"; // Add other sponsor logos as needed

const SponsorsContainer = styled.div`
  padding: 50px 20px;
  border-bottom: 1px solid #ccc;
  text-align: center;
`;

const SponsorGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

const LogoContainer = styled.div`
  flex: 1 1 calc(25% - 40px);
  max-width: calc(25% - 40px);
  margin: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    flex: 1 1 calc(50% - 40px);
    max-width: calc(50% - 40px);
  }

  @media (max-width: 480px) {
    flex: 1 1 100%;
    max-width: 100%;
  }
`;

const Logo = styled.img`
  width: 80%;
  height: auto;
  border-radius: 8px;
`;

const SponsorName = styled.a`
  margin-top: 10px;
  font-weight: bold;
  color: var(--link-color);
  text-decoration: none;

  &:hover {
    color: var(--link-hover-color);
  }
`;

const SponsorDescription = styled.p`
  font-size: 0.9rem;
  color: var(--text-color);
  margin-top: 5px;
`;

const Sponsors = () => {
  return (
    <SponsorsContainer>
      <h2>Sponsors</h2>
      <SponsorGrid>
        <LogoContainer>
          <Logo src={raymourLogo} alt="Raymour & Flanigan" />
          <SponsorName
            href="https://www.raymourflanigan.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Raymour & Flanigan
          </SponsorName>
          <SponsorDescription>
            Raymour & Flanigan is a furniture retail chain that focuses on
            quality home furnishings and community engagement.
          </SponsorDescription>
        </LogoContainer>
        <LogoContainer>
          <Logo src={harlequinLogo} alt="Harlequin Hobby" />
          <SponsorName
            href="https://www.harlequinhobby.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Harlequin Hobby
          </SponsorName>
          <SponsorDescription>
            Harlequin Hobby provides a wide range of hobby supplies and games,
            promoting creativity and community connections.
          </SponsorDescription>
        </LogoContainer>
        <LogoContainer>
          <Logo src={bellsLogo} alt="Bell's Inspired Brewing" />
          <SponsorName
            href="https://www.bellsbeer.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bell's Inspired Brewing
          </SponsorName>
          <SponsorDescription>
            Bell's Inspired Brewing offers quality craft beers and supports
            various community and charitable events.
          </SponsorDescription>
        </LogoContainer>
        <LogoContainer>
          <Logo src={habitatLogo} alt="Habitat for Humanity Buffalo" />
          <SponsorName
            href="https://www.habitatbuffalo.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Habitat for Humanity Buffalo
          </SponsorName>
          <SponsorDescription>
            Habitat for Humanity Buffalo builds and renovates homes for families
            in need, fostering stable and vibrant communities.
          </SponsorDescription>
        </LogoContainer>
        {/* Add more sponsor logos as needed */}
      </SponsorGrid>
    </SponsorsContainer>
  );
};

export default Sponsors;
