import styled from "@emotion/styled";
import { useContext } from "react";
import { ThemContext } from "../context/ThemContext";

const Main = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Header() {
  const { isDark } = useContext(ThemContext);
  return (
    <Main
      style={{
        backgroundColor: isDark ? "black" : "gray",
        color: isDark ? "white" : "black",
      }}
    >
      Header
    </Main>
  );
}
