import { useRef, useState } from "react";

export default function UseRefPractice2() {
  const [renderer, setRenderer] = useState(0);
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

  const renderFunc = () => {
    // state는 값이 바뀌면 컴포넌트의 렌더링을 해주므로, 렌더링하기 위해 임의로 1을 더함
    setRenderer(renderer + 1);
  };

  // 📌 ref는 렌더링을 해도 값이 유지가 되지만, let은 렌더링 시 값이 초기화가 되는 것을 알 수 있다
  // 📌 따라서 ref는 컴포넌트가 마운트 되어서, 언마운트 시점까지 값이 유지가 되는 것을 알 수 있다

  return (
    <div>
      <div>useRefPractice2</div>
      <hr />
      <p>Ref: {countRef.current}</p>
      <button onClick={increaseRef}>Ref올리기</button>
      <p>Var: {countVar}</p>
      <button onClick={increaseVar}>Var올리기</button>
      <br />
      <button onClick={renderFunc}>렌더링하기</button>
    </div>
  );
}
