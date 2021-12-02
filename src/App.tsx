import React from "react";
import { GlobalStyles } from "~/global-styles";
import { ThemeProvider } from "styled-components";
import { observer, Provider } from "mobx-react";
import { Routes } from "./Routes";
import { stores } from "stores/RootStore";

const App = () => {
  return (
    <>
      {stores && (
        <Provider store={stores}>
          <ThemeProvider theme={{}}>
            <Routes />
            <GlobalStyles />
          </ThemeProvider>
        </Provider>
      )}
    </>
  );
};

export default App;
