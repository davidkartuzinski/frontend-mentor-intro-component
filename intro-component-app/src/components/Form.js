import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { Input } from "./index";

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
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-size: 0.88rem;
  }

  #submit-button {
    display: block;
    margin-top: 1rem;
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
        ref={register({
          required: <p>First Name cannot be empty.</p>,
          minLength: {
            value: 2,
            message: <p>First Name must be at least 2 characters.</p>,
          },
        })}
        name="firstName"
      />

      {errors.firstName && errors.firstName.message}

      <Input
        id="lastName"
        type="text"
        placeholder="Last Name"
        name="lastName"
        ref={register({
          required: <p>Last Name cannot be empty.</p>,
          minLength: {
            value: 2,
            message: <p>Last Name must be at least 2 characters.</p>,
          },
        })}
      />

      {errors.lastName && errors.lastName.message}

      <Input
        id="email"
        type="email"
        placeholder="Email Address"
        name="email"
        ref={register({
          required: <p>Email cannot be empty.</p>,
          pattern: {
            value: emailPattern,
            message: <p>Email must be a valid email address.</p>,
          },
        })}
      />

      {errors.email && errors.email.message}

      <Input
        id="password"
        type="password"
        placeholder="Password"
        name="password"
        ref={register({
          required: <p>Password cannot be empty.</p>,
          pattern: {
            value: passwordPattern,
            message: (
              <p>
                Password must contain at least one number, one lowercase and one
                uppercase with a minimum 6 charactors.
              </p>
            ),
          },
        })}
      />

      {errors.password && errors.password.message}

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
