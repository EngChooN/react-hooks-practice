import { useRef, useState } from "react";

export default function UseRefPractice2() {
  const countRef = useRef(0);
  let countVar = 0;

  const increaseRef = () => {
    countRef.current = countRef.current + 1;
    console.log("Ref: " + countRef.current);
  };

  const increaseVar = () => {
    countVar = countVar + 1;
    console.log("Var: " + countVar);
  };

  return (
    <div>
      <div>useRefPractice2</div>
      <hr />
      <p>Ref: {countRef.current}</p>
      <button onClick={increaseRef}>Ref올리기</button>
      <p>Var: {countVar}</p>
      <button onClick={increaseVar}>Var올리기</button>
    </div>
  );
}
