import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  border-radius: 4px;
  border: solid 1px #dedede;
  color: #3d3b48;
  background-color: #fff;
  padding: 1rem;
  width: calc(100% - 2rem - 2px);
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 0.88rem;
`;

const StyledLabel = styled.label`
  display: block;
  margin-top: 1rem;

  :first-child {
    margin-top: 0;
  }
`;

const Input = ({ placeholder, type, Id, register }) => {
  return (
    <StyledLabel className="input-label" htmlFor={Id}>
      <StyledInput
        placeholder={placeholder}
        type={type}
        id={Id}
        aria-label={placeholder}
        ref={register}
      />
    </StyledLabel>
  );
};

export { Input };
