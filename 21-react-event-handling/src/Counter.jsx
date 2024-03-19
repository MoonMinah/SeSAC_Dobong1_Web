import { useState } from "react";

const Counter = () => {
  const [number, setNumner] = useState(0);
  const increase = () => {
    setNumner(number + 1);
  };
  const alertMsg = (event, msg) => {
    console.log(event.target);
    alert(`${msg}~, 현재 숫자는 ${number}입니다.`);
  };
  const consleMsg = (msg) => {
    console.log(`${msg}~, 현재 숫자는 ${number}입니다.`);
  };
  const handleEvent = (e) => {
    console.log(e.target); //sapn
    console.log(e.currentTarget); //button > span
  };
  return (
    <div>
      <h2>{number}</h2>
      <button onClick={increase}>1 더하기</button>
      <button
        onClick={(e) => {
          alertMsg(e, "hello");
        }}
      >
        alert 출력
      </button>
      <button
        onClick={() => {
          consleMsg("안녕하세요");
        }}
      >
        console 출력
      </button>
      <button onClick={handleEvent}>
        <span>target 확인</span>
      </button>
    </div>
  );
};

export default Counter;
