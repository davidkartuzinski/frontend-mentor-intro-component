import React from "react";
import styled from "styled-components";

const StyledHeading = styled.h1`
  font-size: 1.75rem;
  line-height: 1.286;
  font-weight: 900;
  text-align: center;
  letter-spacing: -0.29px;
`;

const Header = ({ heading }) => {
  return <StyledHeading className="header">{heading}</StyledHeading>;
};

export { Header };
