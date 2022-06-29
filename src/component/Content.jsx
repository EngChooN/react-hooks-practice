import styled from "@emotion/styled";
import { useContext } from "react";
import { ThemContext } from "../context/ThemContext";

const Main = styled.div`
  flex: 1; // 남은 부분을 전부 채워주는?
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Content() {
  const { isDark } = useContext(ThemContext);
  return (
    <Main
      style={{
        backgroundColor: isDark ? "gray" : "white",
      }}
    >
      Hi!
    </Main>
  );
}
