import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { useForm } from "react-hook-form";
import {
  // Form,
  // Input,
  Content,
  Header,
  Offer,
  // SubmitButton,
} from "./components";

import mobileBackground from "./images/bg-intro-mobile.png";

const GlobalStyle = createGlobalStyle`
body {
  background-color: #ff7979;
  font-family: 'Poppins', sans-serif;
  background-image: url(${mobileBackground});
}
form{
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
  }
  
  input {
    border-radius: 4px;
    border: solid 1px #dedede;
    color: #3d3b48;
    background-color: #fff;
    padding: 1rem;
    width: calc(100% - 2rem - 2px);
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-size: 0.88rem;
  }
  
  label {
    display: block;
    margin-top: 1rem;

    :first-child {
      margin-top: 0;
    }
  }
  
  button, #submit-button{
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

const StyledMain = styled.main`
  padding: 3.5rem 1rem 1rem;

  .content {
    margin-bottom: 4rem;
  }

  .offer {
    margin-bottom: 1.5rem;
  }
`;

function App() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  const contentParagraph =
    "See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.";
  const heading = "Learn to code by watching others";
  const offer = (
    <p>
      <strong>Try it free 7 days</strong> then $20/mo. thereafter.
    </p>
  );
  const buttonText = "Claim your free trial";

  const termsAndConditions = (
    <p>
      By clicking the button, you are agreeing to our{" "}
      <span>Terms and Services</span>
    </p>
  );

  const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const passwordPattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;

  return (
    <>
      <GlobalStyle />
      <div className="App">
        <StyledMain>
          <Content paragraph={contentParagraph}>
            <Header heading={heading} />
          </Content>
          <Offer offer={offer} />

          <form id="free-trial" onSubmit={handleSubmit(onSubmit)}>
            <label className="input-label" htmlFor="firstName">
              <input
                id="firstName"
                type="text"
                placeholder="First Name"
                name="firstName"
                ref={register({ required: true, minLength: 2 })}
              />
            </label>
            {errors.firstName && errors.firstName.type === "required" && (
              <p>First Name cannot be empty.</p>
            )}
            {errors.firstName && errors.firstName.type === "minLength" && (
              <p>First Name must be at least 2 characters.</p>
            )}

            <label className="input-label" htmlFor="lastName">
              <input
                id="lastName"
                type="text"
                placeholder="Last Name"
                name="lastName"
                ref={register({ required: true, minLength: 2 })}
              />
              {errors.lastName && errors.lastName.type === "required" && (
                <p>Last Name cannot be empty.</p>
              )}
              {errors.lastName && errors.lastName.type === "minLength" && (
                <p>LastName must be at least 2 characters.</p>
              )}
            </label>
            <label className="input-label" htmlFor="email">
              <input
                id="email"
                type="email"
                placeholder="Email Address"
                name="email"
                ref={register({ required: true, pattern: emailPattern })}
              />{" "}
            </label>
            {errors.email && errors.email.type === "required" && (
              <p>Email cannot be empty.</p>
            )}
            {errors.email && errors.email.type === "pattern" && (
              <p>Email must be a valid email address.</p>
            )}

            <label className="input-label" htmlFor="password">
              <input
                id="password"
                type="password"
                placeholder="Password"
                name="password"
                ref={register({ required: true, pattern: passwordPattern })}
              />
              {errors.password && errors.password.type === "required" && (
                <p>Password cannot be empty.</p>
              )}
              {errors.password && errors.password.type === "pattern" && (
                <p>
                  Password must contain at least one number, one lowercase and
                  one uppercase with a minimum 6 charactors.
                </p>
              )}
            </label>
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
          </form>
        </StyledMain>
      </div>
    </>
  );
}

export default App;
