import { css } from "@emotion/react";

const GlobalStyle = css`
  body {
    padding: 0;
    margin: 0;
    font-family: "Pretendard";
    font-style: normal;
  }
  button {
    display: flex;
    cursor: pointer;
    outline: none;
    border-radius: 3px;
  }
  input {
    display: flex;
    outline: none;
    padding-left: 10px;
  }
  p,
  h1,
  h2,
  h3 {
    margin: 0px;
  }
`;
export default GlobalStyle;
