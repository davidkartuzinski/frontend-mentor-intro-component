import React from "react";
import styled, { createGlobalStyle } from "styled-components";
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

          <Form termsAndConditions={termsAndConditions}>
            <Input Id="firstName" type="text" placeholder="First Name" />
            <Input Id="lastName" type="text" placeholder="Last Name" />
            <Input Id="email" type="email" placeholder="Email Address" />
            <Input Id="password" type="password" placeholder="Password" />
            <SubmitButton buttonText={buttonText} />
          </Form>
        </StyledMain>
      </div>
    </>
  );
}

export default App;
