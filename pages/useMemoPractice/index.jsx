import { useMemo, useState } from "react";

export default function UseMemoPracticePage() {
  const [hardNumber, setHardNumber] = useState(1);
  const [easyNumber, setEasyNumber] = useState(1);

  const onChangeHardNumber = (event) => {
    setHardNumber(event.target.value);
  };

  const onChangeEasyNumber = (event) => {
    setEasyNumber(event.target.value);
  };

  const hardCalculate = (inputNumber) => {
    console.log("무거운 작업 함수");
    // 무거운 작업이라는 가정으로 의미 없는 for문 추가
    for (let i = 0; i < 999999999; i++) {}
    return Number(inputNumber) + 10000;
  };

  const easyCalculate = (inputNumber) => {
    console.log("가벼운 작업 함수");
    return Number(inputNumber) + 1;
  };

  // const hardResult = hardCalculate(hardNumber).;
  const hardResult = useMemo(() => {
    return hardCalculate(hardNumber);
  }, [hardNumber]);

  const easyResult = easyCalculate(easyNumber);

  return (
    <div>
      <p>useMemoPractice</p>
      <hr />
      <h3>무거운 계산</h3>
      <input type={"number"} value={hardNumber} onChange={onChangeHardNumber} />
      <span> + 10000 = {hardResult}</span>
      <br />
      <h3>가벼운 계산</h3>
      <input type={"number"} value={easyNumber} onChange={onChangeEasyNumber} />
      <span> + 1 = {easyResult}</span>
    </div>
  );
}
