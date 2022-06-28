import { useRef, useState } from "react";

export default function UseRefPracticeVar01() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  // countRef.current로 접근해주면 됨을 확인
  // console.log(countRef);

  console.log("렌더링됨");

  const increaseCountState = () => {
    setCount(count + 1);
  };

  const increaseCountRef = () => {
    countRef.current = countRef.current + 1;
    console.log("Ref: " + countRef.current);
    // Ref는 아무리 수정을해도 컴포넌트를 렌더링 해주지 않으므로, 실질적 값이 올라도 브라우저에는 0으로 표시되어 보인다
  };

  return (
    <div>
      <div>useRefPracticeVar01</div>
      <hr />
      <p>State: {count}</p>
      <button onClick={increaseCountState}>State올리기</button>
      <p>Ref: {countRef.current}</p>
      <button onClick={increaseCountRef}>Ref올리기</button>
    </div>
  );
}
