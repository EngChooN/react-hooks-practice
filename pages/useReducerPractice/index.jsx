import { useReducer, useState } from "react";

// useReducer는 세가지로 나뉜다
// reducer - state를 업데이트 하는 역할 (은행)
// dispatch - state 업데이트를 위한 요구
// action - 요구의 내용
const reducer = (state, action) => {
  console.log(
    "dispatch하여 reducer함수가 불려져 일을 시작, 요구 내용: " + action.type,
    action.payload + ", state: " + state
  );

  switch (action.type) {
    // dispatch의 type이 예금 일 때..
    case "예금":
      return state + Number(action.payload);
    // dispatch의 type이 출금 일 때..
    case "출금":
      return state - Number(action.payload);
    // dispatch의 type이 아무것도 아닐 때, 기본 값..
    default:
      return state;
  }
};

export default function UseReducerPage() {
  const [number, setNumber] = useState(0);
  const [money, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <div>useReducerPractice!</div>
      <hr />
      <p>잔고: {money}원</p>
      <input
        type={"number"}
        value={number}
        onChange={(event) => setNumber(Number(event.target.value))}
        step={"1000"}
      />
      <button
        onClick={() => {
          dispatch({ type: "예금", payload: number });
        }}
      >
        예금
      </button>
      <button
        onClick={() => {
          dispatch({ type: "출금", payload: number });
        }}
      >
        출금
      </button>
    </div>
  );
}
