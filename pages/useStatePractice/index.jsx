import { useState } from "react";

export default function UseStatePractice() {
  const [time, setTime] = useState(1);

  const heavyWork = () => {
    console.log("무거운 작업이라면...");
    return [];
  };

  const [inputValue, setInputValue] = useState("");

  /* state 초깃값 안에 값을 리턴하는 함수를 넣어준다면, 매번 렌더링 될 때마다 heavyWork 함수가 불려지게 된다. 
  따라서 콜백함수로 넣어준다면, 최초 렌더링 시에만 함수를 불러오게 된다! */
  // const [names, setNames] = useState(heavyWork());
  const [names, setNames] = useState(() => {
    return heavyWork();
  });

  //  12가 넘어가면 다시 1로 바뀌게 하기 [아마 let으로 setTime하는 이유는 렌더링 때문에 그런것이 아닐까...?]
  const onClickTimeUpdate = () => {
    let newTime;
    if (time >= 12) {
      newTime = 1;
    } else {
      newTime = time + 1;
    }
    setTime(newTime);
  };

  const onChangeName = (e) => {
    setInputValue(e.target.value);
  };

  const onClickNameUpload = () => {
    // inputValue 값과, names 배열 안의 값을 얕은 복사하여, names 배열에 넣음
    setNames([inputValue, ...names]);
  };

  // 방법2
  const onClickNameUpload2 = () => {
    setNames((prev) => {
      return [inputValue, ...prev];
    });
  };

  return (
    <div>
      <div>useState 연습하기!!</div>
      <hr />
      <div>시간 업데이트</div>
      <span>현재시각: {time}</span>
      <button onClick={onClickTimeUpdate}>update</button>
      <hr />
      <div>이름 업로드</div>
      <input placeholder="이름을 입력하세요" onChange={onChangeName} />
      <br />
      <button onClick={onClickNameUpload}>이름 업로드 [state 얕은복사]</button>
      <br />
      <button onClick={onClickNameUpload2}>
        이름 업로드 [prev 콜백함수 얕은복사]
      </button>
      {names?.map((name, idx) => {
        return <p key={idx}>{name}</p>;
      })}
    </div>
  );
}
