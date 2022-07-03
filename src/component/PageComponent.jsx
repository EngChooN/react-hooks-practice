import Content from "../../src/component/Content";
import Footer from "../../src/component/Footer";
import Header from "../../src/component/Header";
import styled from "@emotion/styled";
import { useContext, useState } from "react";
import { ThemContext } from "../context/ThemContext";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`;

const Button = styled.button`
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 0px 30px 30px 0px; ;
`;

export default function PageComponent() {
  // context 사용법
  const { isDark, setIsDark } = useContext(ThemContext);
  const [dark, setDark] = useState(true);

  const onClickBtn = () => {
    setIsDark(!isDark);
    console.log(isDark);
  };

  return (
    <Main>
      <Header />
      <Content />
      <Footer dark={dark} />
      <Button onClick={onClickBtn}>DarkMode!</Button>
    </Main>
  );
}
