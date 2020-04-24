import React from "react";
import styled from "styled-components";
import IconError from "../images/icon-error.svg";

const StyledInput = styled.input`
  border-radius: 4px;
  border: solid 1px #dedede;
  color: #3d3b48;
  background-color: #fff;
  padding: 1.1rem;
  width: 100%;
  max-width: 460px;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 0.88rem;
  height: 56px;

  :focus {
    border: solid 1px #5e54a4;
  }
`;

const StyledLabel = styled.label`
  display: block;
  margin-top: min(calc(16px + 0.26vw), 1.26rem);
  text-align: center;

  :first-child {
    margin-top: 0;
  }

  p {
    color: #ff7979;
    font-style: italic;
    text-align: right;
    line-height: 1.1;
    padding-right: 0;
    padding-top: 0;
    margin-top: 0.6rem;
    width: 100%;
    max-width: 475px;
  }

  .inputError {
    border: 2px solid #ff7979;
    /* background: url(${IconError}) no-repeat 230px center !important;
    */
    
   background: url(${IconError}) no-repeat calc(100% - 25px) center !important;
    
    color: #ff7979;
  }
`;

const Input = React.forwardRef(
  ({ placeholder, type, Id, name, className, children }, ref) => {
    return (
      <StyledLabel className="input-label" htmlFor={Id}>
        <StyledInput
          placeholder={placeholder}
          type={type}
          id={Id}
          aria-label={placeholder}
          ref={ref}
          name={name}
          className={className}
        />
        {children}
      </StyledLabel>
    );
  }
);

export { Input };
