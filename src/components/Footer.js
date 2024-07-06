import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: black;
  color: white;
  text-align: center;
  padding: 20px;
  border-top: 1px solid #ccc;
`;

const CopyrightText = styled.p`
  margin: 0;
  font-size: 0.9rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>
        For more information on Habitat For Humanity Buffalo, visit our website:{" "}
        <a
          href="https://www.habitatbuffalo.org"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "var(--link-color)" }}
        >
          www.habitatbuffalo.org
        </a>
      </p>
      <CopyrightText>
        © 2024 Habitat for Humanity Buffalo. All rights reserved.
      </CopyrightText>
    </FooterContainer>
  );
};

export default Footer;
