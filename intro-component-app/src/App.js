import React from "react";
import {
  contentParagraph,
  heading,
  offer,
  termsAndConditions,
  successMessage,
} from "./content/content";
import GlobalStyles from "./components/GlobalStyle";
import { Form, Content, Header } from "./components";

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
          <div>
            <Form
              termsAndConditions={termsAndConditions}
              successMessage={successMessage}
              offer={offer}
            />
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
