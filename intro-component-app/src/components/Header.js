import React from "react";
import styled from "styled-components";

const StyledHeading = styled.h1`
  /* font-size: clamp(1.75rem, 1vw, 3.125rem);
   */
  font-size: min(calc(16px + 3.2vw), 3.125rem);
  line-height: 1.286;
  font-weight: 900;
  text-align: center;
  letter-spacing: -0.29px;

  @media screen and (min-width: 1150px) {
    text-align: left;
    line-height: 1.1;
    margin-bottom: 2rem;
    margin-top: 5.3rem;
  }
`;

const Header = ({ heading }) => {
  return <StyledHeading className="header">{heading}</StyledHeading>;
};

export { Header };
