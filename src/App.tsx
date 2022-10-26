import React from "react";
import MainPage from "./components/MainPage/MainPage";
import GlobalStyle from "./GlobalStyle";
import { Global } from "@emotion/react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Global styles={GlobalStyle} />
      <MainPage />
    </div>
  );
}

export default App;
