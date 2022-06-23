import { useEffect } from "react";

export default function Timer() {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("타이머가 실행중입니다!");
    }, 1000);

    /* 최초에 interval 함수를 useEffect로 불러왔기 때문에,
      타이머를 닫아도 콘솔에 타이머가 작동하는 것을 볼 수 있다.
      따라서 clearInterval 함수로 타이머를 종료해주는 함수를 써야한다.
    */
    return () => {
      clearInterval(timer);
      console.log("타이머 종료");
    };
  }, []);

  return <div>타이머입니다 콘솔창을 확인하세요</div>;
}
