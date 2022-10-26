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
`;
export default GlobalStyle;
