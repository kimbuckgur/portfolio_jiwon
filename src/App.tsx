import React from "react";
import GlobalStyle from "./GlobalStyle";
import { Global } from "@emotion/react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Global styles={GlobalStyle} />
    </div>
  );
}

export default App;
