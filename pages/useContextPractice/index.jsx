import { useState } from "react";
import PageComponent from "../../src/component/PageComponent";
import { ThemContext } from "../../src/context/ThemContext";

export default function UseConextPractixePage() {
  const [isDark, setIsDark] = useState(false);
  return (
    //  ThemContext.Provider로 감싸준 모든 하위 컴포넌트는 props사용 없이 value의 isDark와 setIsDark에 접근 할 수 있게된다
    <ThemContext.Provider value={{ isDark, setIsDark }}>
      <PageComponent />
    </ThemContext.Provider>
  );
}
