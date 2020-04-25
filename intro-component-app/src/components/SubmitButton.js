import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border-radius: 6px;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-bottom: solid 4px rgba(0, 0, 0, 0.0908818);
  color: #fff;
  text-transform: uppercase;
  background-color: #38cc8b;
  padding: 1rem;
  width: 100%;
  max-width: 460px;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 0.88rem;
  margin: 0 auto 0;
  height: 56px;

  display: block;
  /* margin-top: 1rem; */
  margin-top: min(calc(14px + 0.28vw), 1.3rem);
`;

const StyledLabel = styled.label`
  display: block;
  margin-top: 1rem;
`;

const SubmitButton = ({ type, id, value, form, children }) => {
  return (
    <StyledLabel className={id} htmlFor={id}>
      <StyledButton value={value} type={type} form={form} id={id}>
        {children}
      </StyledButton>
    </StyledLabel>
  );
};

export { SubmitButton };
