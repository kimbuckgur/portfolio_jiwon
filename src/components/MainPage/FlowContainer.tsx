import React, { useState } from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

interface flowContainerType {
  postion: "top" | "bottom";
}

const FlowContainer = (props: flowContainerType) => {
  const { postion } = props;
  const textArray = range(1, 15);

  function range(start: number, end: number) {
    let array = [];
    for (let i = start; i < end; ++i) {
      array.push(i);
    }
    return array;
  }

  return (
    <>
      {postion == "top" ? (
        <_FloxBoxTop>
          {textArray.map((item, index) => {
            return (
              <_Flow time="4s" key={index}>
                SONJIWON
              </_Flow>
            );
          })}
        </_FloxBoxTop>
      ) : (
        <_FloxBoxBottom>
          {textArray.map((item, index) => {
            return (
              <_Flow time="2s" key={index}>
                SONJIWON
              </_Flow>
            );
          })}
        </_FloxBoxBottom>
      )}
    </>
  );
};

const textLoop = keyframes`
   0% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
    100% {
      -webkit-transform: translate3d(-100%, 0, 0);
      transform: translate3d(-100%, 0, 0);
    }
`;

const _FloxBoxTop = styled.div`
  position: absolute;
  top: 50px;
  display: flex;
  align-items: center;
  gap: 50px;
`;

const _FloxBoxBottom = styled.div`
  position: absolute;
  bottom: 50px;
  display: flex;
  align-items: center;
  gap: 50px;
`;

interface flowType {
  time: string;
}

const _Flow = styled.span<flowType>`
  letter-spacing: 0.05em;
  color: #ababab;
  font-weight: 700;
  font-size: 20px;
  animation: ${textLoop} ${(props) => props.time} linear infinite;
`;

export default FlowContainer;
