import React from "react";
import styled from "styled-components";

const StyledSection = styled.section`
  color: #fff;
  font-size: 1rem;
  line-height: 1.625;
  font-weight: 400;
  text-align: center;
  padding: 0 0.5rem;
  max-width: 540px;
  margin: 0 auto;

  @media screen and (min-width: 1150px) {
    grid-column: 2 / span 1;
    grid-row: 2 / span 1;
    padding: 0;

    p {
      text-align: left;
    }
  }
`;

const Content = ({ children, paragraph }) => {
  return (
    <StyledSection className="content">
      {children}
      <p>{paragraph}</p>
    </StyledSection>
  );
};

export { Content };
