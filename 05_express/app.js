const express = require("express");
const app = express();
const PORT = 9090;

// 뷰엔진을 ejs로 설정할거라고 알려주는 미들웨어?
app.set("view engine", "ejs");
// 보여주는 views를 사용
app.set("views", "./views");
// public경로(상대경로) 대신 static경로 이용한다는 설정 -> 폴더경로 숨기기
app.use("/static", express.static(__dirname + "/public"));

app.get("/", (request, response) => {
  // send는 http에서 write와 end를 써줘야하던게 합쳐진 것이다.
  // response.send("hello express!! 안녕하세요 익스프레스");

  /* ejs 보여줄때?는 render사용한다.
    render의 두번째 인자에서 
    index.ejs에서 사용할 정보 전달  
  */
  response.render("index.ejs", {
    btns: ["apple", "banana"],
    isLogin: true,
    userInfo: {
      name: "allie",
      msg: "식사는 맛있게 하셨나요?!",
    },
  });
});

// 라우팅
app.get("/register", (req, res) => {
  res.render("register");
});

app.get("/login", (req, res) => {
  res.render("login");
});

// page not found, 404 페이지는 맨 마지막에 설정해준다.
app.get("*", (req, res) => {
  res.render("404");
});

app.listen(PORT, function () {
  console.log("http://localhost:" + PORT);
});
