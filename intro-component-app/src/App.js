import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { useForm } from "react-hook-form";
import {
  Form,
  Input,
  Content,
  Header,
  Offer,
  SubmitButton,
} from "./components";

import mobileBackground from "./images/bg-intro-mobile.png";

const GlobalStyle = createGlobalStyle`
body {
  background-color: #ff7979;
  font-family: 'Poppins', sans-serif;
  background-image: url(${mobileBackground});
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

  return (
    <>
      <GlobalStyle />
      <div className="App">
        <StyledMain>
          <Content paragraph={contentParagraph}>
            <Header heading={heading} />
          </Content>
          <Offer offer={offer} />

          <Form
            termsAndConditions={termsAndConditions}
            onSubmit={handleSubmit(onSubmit)}
          >
            <Input
              name="firstName"
              // register={register({ required: true, minLength: 2 })} // Then this with register
              inputRef={register({ required: true, minLength: 2 })} // Original
              // ref={register({ required: true, minLength: 2 })} // Original
              Id="firstName"
              type="text"
              placeholder="First Name"
            />
            {errors.firstName && errors.firstName.type === "required" && (
              <p>First Name cannot be empty.</p>
            )}
            {errors.firstName && errors.firstName.type === "minLength" && (
              <p>First Name must be at least 2 characters.</p>
            )}

            <Input
              name="lastName"
              // register={register({ required: true, minLength: 2 })}
              inputRef={register({ required: true, minLength: 2 })}
              // ref={register({ required: true, minLength: 2 })}
              Id="lastName"
              type="text"
              placeholder="Last Name"
            />
            {errors.lastName && errors.lastName.type === "required" && (
              <p>Last Name cannot be empty.</p>
            )}

            <Input
              name="email"
              // register={register({ required: true, minLength: 2 })}
              inputRef={register({ required: true, minLength: 2 })}
              // ref={register({ required: true, minLength: 2 })}
              Id="email"
              type="email"
              placeholder="Email Address"
            />
            {errors.email && errors.email.type === "required" && (
              <p>Email cannot be empty.</p>
            )}

            <Input
              name="password"
              // register={register({ required: true, minLength: 2 })}
              // inputRef={register({ required: true, minLength: 2 })}
              ref={register({ required: true, minLength: 2 })}
              Id="password"
              type="password"
              placeholder="Password"
            />
            {errors.password && errors.password.type === "required" && (
              <p>Password cannot be empty.</p>
            )}

            <SubmitButton buttonText={buttonText} />
          </Form>
        </StyledMain>
      </div>
    </>
  );
}

export default App;
