import { useEffect, useState } from "react";
import Timer from "../../src/timer";

export default function useEffectPracticePage() {
  const [input, setInput] = useState("");
  const [timerValid, setTimerValid] = useState(false);

  useEffect(() => {
    //  컴포넌트가 렌더링 될 때마다, 실행
    console.log("컴포넌트가 렌더링 될 때마다, 실행");
  });

  useEffect(() => {
    // 컴포넌트가 마운트 될 때 === 첫 화면에 렌더링 될 때, 실행 (최초만)
    console.log(
      "컴포넌트가 마운트 될 때 === 첫 화면에 렌더링 될 때, 실행 (최초만)"
    );
  }, []);

  useEffect(() => {
    // 컴포넌트가 마운트 될 때, 배열안의 value의 값이 바뀔 때 마다 실행
    console.log(
      "컴포넌트가 마운트 될 때, 배열안의 value의 값이 바뀔 때 마다 실행"
    );
  }, [input]);

  const onChangeInput = (e) => [setInput(e.target.value)];

  return (
    <div>
      <div>인풋의 값: {input}</div>
      <input type={"text"} value={input} onChange={onChangeInput} />
      <br />
      {timerValid && <Timer />}
      <button onClick={() => setTimerValid(!timerValid)}>타이머 열/닫기</button>
    </div>
  );
}
