//  useReducer를 이용한 출석부 어플리케이션 실습
import { useReducer, useState } from "react";
import Students from "../../src/component/Students";

const reducer = (state, action) => {
  switch (action.type) {
    case "추가":
      const newName = action.payload.name;
      const newStudents = {
        name: newName,
        id: Date.now(),
        isHere: false,
      };
      return {
        count: state.count + 1,
        students: [...state.students, newStudents],
      };

    case "삭제":
      return {
        count: state.count - 1,
        students: state.students.filter((el) => el.id !== action.payload),
      };

    case "출석":
      return {
        count: state.count,
        students: state.students.map((el) => {
          if (el.id === action.payload) {
            return {
              ...el,
              isHere: !el.isHere,
            };
          } else return el;
        }),
      };

    default:
      return state;
  }
};

const initialState = {
  count: 0,
  students: [],
};
export default function UseReducerPage() {
  const [name, setName] = useState("");
  const [studentsInfo, dispatch] = useReducer(reducer, initialState);
  console.log(studentsInfo);

  return (
    <div>
      <div>useReducerPractice02</div>
      <hr />
      <p>총 학생 수: {studentsInfo.count}</p>
      <input
        type={"text"}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch({ type: "추가", payload: { name } });
        }}
      >
        학생 추가
      </button>
      {studentsInfo.students.map((el) => (
        <div key={el.id}>
          <Students students={el} dispatch={dispatch} />
          <button
            onClick={() => {
              dispatch({ type: "삭제", payload: el.id });
            }}
          >
            삭제
          </button>
        </div>
      ))}
    </div>
  );
}
