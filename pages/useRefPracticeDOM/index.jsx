import { useEffect, useRef, useState } from "react";

export default function UseRefPracticeDOM01() {
  const inputRef = useRef();

  useEffect(() => {
    console.log(inputRef);
    // 콘솔을 찍으면 undefined가 나온다 (userRef() 아무 값도 안줬기 때문에)
    inputRef.current.focus();
    // useEffect가 실행 시, inputRef로 DOM의 접근하여 focus를 해줌
  }, []);

  const login = () => {
    alert("환영합니다" + inputRef.current.value);
    // 인풋의 친 값을 DOM에 접근해 alert에 띄워보기
    inputRef.current.focus();
    inputRef.current.value = "";
    // 인풋 값을 초기화
  };

  return (
    <div>
      <div>useRefPracticeDOM01</div>
      <hr />
      <input ref={inputRef} type={"text"} placeholder="username" />
      {/* input 태그에 ref를 inputRef를 입력하게 되면, inputRef의 값은 인풋의 대한 정보가 담기게 된다 (콘솔에 input이라고 뜸!) */}
      <button onClick={login}>Login</button>
    </div>
  );
}
