import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { Input } from "./index";

const StyledForm = styled.form`
  border-radius: 8px;
  border: solid 1px #dedede;
  color: #3d3b48;
  background-color: #fff;
  padding: min(calc(16px + 2vw), 2.45rem) 1.5rem min(calc(12px + 0.9vw), 2rem)
    1.5rem;
  max-width: 540px;
  margin: 0 auto;

  -webkit-box-shadow: 0px 7px 0px 0px rgba(0, 0, 0, 0.14);
  -moz-box-shadow: 0px 7px 0px 0px rgba(0, 0, 0, 0.14);
  box-shadow: 0px 7px 0px 0px rgba(0, 0, 0, 0.14);

  @media screen and (min-width: 1150px) {
    min-height: 474px;
    height: 100%;
  }

  p {
    color: #bab7d4;
    font-size: 0.688rem;
    line-height: 1.909;
    text-align: center;
    padding: 0 1rem;
    margin-top: 0.7rem;
  }

  p span {
    color: #ff7979;
  }

  button,
  #submit-button {
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
  }

  #submit-button {
    display: block;
    /* margin-top: 1rem; */
    margin-top: min(calc(14px + 0.28vw), 1.3rem);
  }
`;

const Form = ({ termsAndConditions }) => {
  const { register, handleSubmit, errors } = useForm({ mode: "onBlur" });
  const onSubmit = (data, event) => {
    event.target.reset(); // reset the form after submission
    console.log(data);
  };

  const buttonText = "Claim your free trial";
  const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const passwordPattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;

  return (
    <StyledForm id="free-trial" onSubmit={handleSubmit(onSubmit)}>
      <Input
        placeholder="First Name"
        type="text"
        id="firstName"
        aria-invalid={errors.firstName ? "true" : "false"}
        aria-describedby="error-firstName-required error-firstName-maxLength"
        className={errors.firstName ? "inputError" : ""}
        ref={register({
          required: (
            <p role="alert" id="error-firstName-required">
              First Name cannot be empty
            </p>
          ),
          minLength: {
            value: 2,
            message: (
              <p role="alert" id="error-firstName-maxLength">
                First Name must be at least 2 characters
              </p>
            ),
          },
        })}
        name="firstName"
      >
        {errors.firstName && errors.firstName.message}
      </Input>

      <Input
        id="lastName"
        type="text"
        placeholder="Last Name"
        name="lastName"
        aria-invalid={errors.lastName ? "true" : "false"}
        aria-describedby="error-lastName-required error-lastName-maxLength"
        className={errors.lastName ? "inputError" : ""}
        ref={register({
          required: (
            <p role="alert" id="error-lastName-required">
              Last Name cannot be empty
            </p>
          ),
          minLength: {
            value: 2,
            message: (
              <p role="alert" id="error-lastName-maxLength">
                Last Name must be at least 2 characters
              </p>
            ),
          },
        })}
      >
        {errors.lastName && errors.lastName.message}
      </Input>

      <Input
        id="email"
        type="email"
        placeholder="Email Address"
        name="email"
        aria-invalid={errors.email ? "true" : "false"}
        aria-describedby="error-email-required error-email-pattern"
        className={errors.email ? "inputError" : ""}
        ref={register({
          required: (
            <p role="alert" id="error-email-required">
              Email cannot be empty
            </p>
          ),
          pattern: {
            value: emailPattern,
            message: (
              <p role="alert" id="error-email-pattern">
                Email must be a valid email address
              </p>
            ),
          },
        })}
      >
        {errors.email && errors.email.message}
      </Input>

      <Input
        id="password"
        type="password"
        placeholder="Password"
        name="password"
        aria-invalid={errors.password ? "true" : "false"}
        aria-describedby="error-password-required error-password-pattern"
        className={errors.password ? "inputError" : ""}
        ref={register({
          required: (
            <p role="alert" id="error-password-required">
              Password cannot be empty
            </p>
          ),
          pattern: {
            value: passwordPattern,
            message: (
              <p role="alert" id="error-password-pattern">
                Password must contain at least one number, one lowercase and one
                uppercase with a minimum 6 charactors
              </p>
            ),
          },
        })}
      >
        {errors.password && errors.password.message}
      </Input>

      <label className="submit-button" htmlFor="submit- button">
        <button
          type="submit"
          id="submit-button"
          form="free-trial"
          value="submit"
        >
          {buttonText}
        </button>
      </label>
      {termsAndConditions}
    </StyledForm>
  );
};

export { Form };
