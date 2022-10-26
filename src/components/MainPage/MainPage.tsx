import React from "react";
import TitleSection from "./TitleSection";
import FlowContainer from "./FlowContainer";
import styled from "@emotion/styled";

const MainPage = () => {
  return (
    <_Container>
      <_Background />
      <FlowContainer postion="top" />
      <TitleSection />
      <FlowContainer postion="bottom" />
    </_Container>
  );
};

const _Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const _Background = styled.div`
  position: absolute;
  right: 0px;
  width: 50vw;
  height: 100%;
  background-color: #242424;
`;

export default MainPage;
