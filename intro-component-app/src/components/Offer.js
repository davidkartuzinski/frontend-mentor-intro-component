import React from "react";
import styled from "styled-components";

const StyledSection = styled.section`
  font-size: 0.938rem;
  line-height: 1.733;
  font-weight: 400;
  letter-spacing: 0.27px;
  color: #fff;
  padding: 0.188rem 4rem;
  background-color: #5e54a4;
  border-radius: 8px;
  text-align: center;
`;

const Offer = ({ offer }) => {
  return <StyledSection className="offer">{offer}</StyledSection>;
};

export { Offer };
