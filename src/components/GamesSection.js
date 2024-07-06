import React from "react";
import styled from "styled-components";
import { Element } from "react-scroll";

const SectionContainer = styled(Element)`
  padding: 50px 20px;
  border-bottom: 1px solid #ccc;
`;

const Section = ({ name, title, children }) => {
  return (
    <SectionContainer name={name}>
      <h2>{title}</h2>
      {children}
    </SectionContainer>
  );
};

export default Section;
