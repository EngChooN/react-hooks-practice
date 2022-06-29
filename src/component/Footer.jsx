import styled from "@emotion/styled";
import { useContext } from "react";
import { ThemContext } from "../context/ThemContext";

const Main = styled.div`
  /* background-color: ${(props) => (props.isDark ? "black" : "gray")}; */
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Footer() {
  const { isDark } = useContext(ThemContext);
  return (
    <Main
      style={{
        backgroundColor: isDark ? "black" : "gray",
        color: isDark ? "white" : "black",
      }}
    >
      Footer
    </Main>
  );
}
