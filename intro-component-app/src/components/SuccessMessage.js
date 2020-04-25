import React from "react";
import styled from "styled-components";

const StyledSection = styled.section`
  font-size: 0.938rem;
  line-height: 1.733;
  font-weight: 200;
  letter-spacing: 0.27px;
  color: #fff;
  padding: 0.188rem 4rem;
  background-color: #38cc8b;
  border-radius: 8px;
  text-align: center;
  max-width: 540px;
  margin: 0 auto;
  -webkit-box-shadow: 0px 7px 0px 0px rgba(0, 0, 0, 0.14);
  -moz-box-shadow: 0px 7px 0px 0px rgba(0, 0, 0, 0.14);
  box-shadow: 0px 7px 0px 0px rgba(0, 0, 0, 0.14);

  @media screen and (min-width: 1150px) {
    height: 3.75rem;
  }
`;

const SuccessMessage = ({ successMessage }) => {
  return (
    <StyledSection className="success-message">{successMessage}</StyledSection>
  );
};

export { SuccessMessage };
