import React from "react";
import styled from "styled-components";

const StyledSection = styled.section`
  color: #fff;
  font-size: 1rem;
  line-height: 1.625;
  font-weight: 400;
  text-align: center;
  padding: 0 0.5rem;
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
