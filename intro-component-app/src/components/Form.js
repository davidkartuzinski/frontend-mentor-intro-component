import React from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  border-radius: 8px;
  border: solid 1px #dedede;
  color: #3d3b48;
  background-color: #fff;
  padding: 1.2rem 1.5rem 0.862rem 1.5rem;

  p {
    color: #bab7d4;
    font-size: 0.688rem;
    line-height: 1.909;
    text-align: center;
    padding: 0 1rem;
  }

  p span {
    color: #ff7979;
  }
`;

const Form = ({ children, termsAndConditions }) => {
  return (
    <StyledForm>
      {children}
      {termsAndConditions}
    </StyledForm>
  );
};

export { Form };
