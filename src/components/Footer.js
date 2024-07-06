import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: var(--background-color);
  padding: 20px;
  border-top: 1px solid #ccc;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>All proceeds to benefit Habitat for Humanity Buffalo</p>
    </FooterContainer>
  );
};

export default Footer;
