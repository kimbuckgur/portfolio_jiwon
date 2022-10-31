import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import MenuPage from "./components/MenuPage/MenuPage";
import GlobalStyle from "./GlobalStyle";
import { Global } from "@emotion/react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Global styles={GlobalStyle} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="menu" element={<MenuPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
