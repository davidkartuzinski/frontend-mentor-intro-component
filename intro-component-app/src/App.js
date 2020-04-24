import React from "react";
import {
  contentParagraph,
  heading,
  offer,
  termsAndConditions,
} from "./content/content";
import GlobalStyles from "./components/GlobalStyle";
import { Form, Content, Header, Offer } from "./components";

const GlobalStyle = GlobalStyles;

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <main>
          <Content paragraph={contentParagraph}>
            <Header heading={heading} />
          </Content>
          <Offer offer={offer} />
          <Form termsAndConditions={termsAndConditions} />
        </main>
      </div>
    </>
  );
}

export default App;
