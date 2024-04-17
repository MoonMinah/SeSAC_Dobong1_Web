import { useState } from "react";
import io from "socket.io-client";

const socket = io.connect("http://localhost:8000", {
  autoConnect: false,
});

export default function Practice1() {
  const [fromServerStr, setFromServerStr] = useState("");
  const initSocketConnect = () => {
    console.log(socket.connected);
    if (!socket.connected) socket.connect(); // 클라이언트 소켓에 접속
    // console.log('after connect', socket.connected)
  };

  useEffect(() => {
    initSocketConnect();
  }, []); // mount됐을 때만 동작

  const hello = () => {
    socket.emit("hello", "hello");
    socket.on("hello2", (msg) => {
      setFromServerStr(`server:${msg}`);
    });
  };

  const study = () => {
    socket.emit("study", "study");
    socket.on("study2", (msg) => {
      setFromServerStr(`server:${msg}`);
    });
  };

  const bye = () => {
    socket.emit("bye", "bye");
    socket.on("bye2", (msg) => {
      setFromServerStr(`server:${msg}`);
    });
  };

  return (
    <>
      <button onClick={hello}>hello</button>
      <button onClick={study}>study</button>
      <button onClick={bye}>bye</button>
      <h3>{fromServerStr}</h3>
    </>
  );
}
