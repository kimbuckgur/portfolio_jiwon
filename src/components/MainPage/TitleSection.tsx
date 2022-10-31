import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";

const TitleSection = () => {
  const navigate = useNavigate();

  const moveMenuPage = () => {
    navigate("/menu");
  };

  return (
    <>
      <_TitleLayout>
        <_Title color="#242424" text_align="right">
          PORT
        </_Title>
        <_BlackTitleBox>
          <_Title color="#ffffff" text_align="left">
            FOLIO
          </_Title>
          <_StartDot onClick={moveMenuPage} />
        </_BlackTitleBox>
      </_TitleLayout>
      <_Line />
      <_TextLayout>
        <_Text color="#242424" text_align="right">
          시작<_TextPoint onClick={moveMenuPage}>점</_TextPoint>을
        </_Text>
        <_Text color="#ffffff" text_align="left">
          눌러주세요
        </_Text>
      </_TextLayout>
    </>
  );
};

const _TitleLayout = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

interface TitleType {
  color: string;
  text_align: string;
}

const _Title = styled.h1<TitleType>`
  font-weight: 700;
  font-size: 60px;
  letter-spacing: 0.05em;
  color: ${(props) => props.color};
  width: 200px;
  text-align: ${(props) => props.text_align};
  text-shadow: 4px 4px 0px rgba(255, 255, 255, 0.3);
`;

const _BlackTitleBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const _StartDot = styled.button`
  transition: all 0.2s;
  position: absolute;
  width: 22px;
  height: 22px;
  left: 200px;
  background: #ff4b4b;
  border-radius: 100px;
  border: none;

  &:hover {
    width: 26px;
    height: 26px;
    background-color: #f54545;
  }
`;

const _Line = styled.div`
  z-index: 1;
  width: 200px;
  height: 2px;
  background: #ababab;
  border-radius: 10px;
`;

const _TextLayout = styled.div`
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 10px;
`;

interface TextType {
  color: string;
  text_align: string;
}

const _Text = styled.p<TextType>`
  width: 130px;
  text-align: ${(props) => props.text_align};
  font-weight: 500;
  font-size: 25px;
  color: ${(props) => props.color};
`;

const _TextPoint = styled.span`
  cursor: pointer;
  transition: all 0.3s;
  font-weight: 700;
  color: #ff4b4b;

  &:hover {
    color: #e92a2a;
  }
`;

export default TitleSection;
