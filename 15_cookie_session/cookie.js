const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = 9090;

app.set("views", "./views");
app.set("view engine", "ejs");

// // cookie를 위한 미들웨어
// // ver1. 암호화 되지 않은 쿠키
// app.use(cookieParser());

// ver2. 암호화 된 쿠키
app.use(cookieParser("secretKey"));

const cookieConfig = {
  /*
  - maxAge: 쿠키의 수명, 1000이 1초인 밀리초 단위
  - expires: 만료날짜, GMT 시간 설정
  - httpOnly: http 통신만 접근 허용
  - path: '/abc',  //쿠키가 해당 경로와 그 하위경로에서만 활성화
    (default: '/')
  - secure: https로 통신하는 경우에만 쿠키 전송 (https는 http보다 보안이 강화됨)
  - signed: 쿠키의 암호화 (true, false)
  */
  maxAge: 60 * 100,
  httpOnly: true,
  signed: true, // 쿠키 암호화
  // path: ,
  // secure: ,
};
app.get("/", (req, res) => {
  res.render("cookie");
});

// 쿠키 설정
// res.cookie(쿠키이름, 쿠키값, 옵션)
app.get("/setCookie", (req, res) => {
  res.cookie("myCookie", "cookie~~", cookieConfig);
  res.send("setCookie 완료");
});

// 쿠키 가져오기
app.get("/getCookie", (req, res) => {
  // console.log(req.cookies); // ver1.암호화되지 않은 쿠키일 때
  // res.send(req.cookies);

  console.log(req.signedCookies); // ver2.암호화된 않은 쿠키일 때
  res.send(req.signedCookies);
});

// 쿠키 삭제
app.get("/clearCookie", (req, res) => {
  res.clearCookie("myCookie", "cookie~", cookieConfig);
  //res.cookie("myCookie", "cookie~~", cookieConfig); 설정 똑같이 써줘야한다

  res.send("쿠키삭제");
});

const cookieConfig2 = {
  maxAge: 60 * 100,
  httpOnly: true,
};
app.get("/abc", (req, res) => {
  res.cookie("abc", "another cookie", cookieConfig2);
  res.render("abc");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

/*
ver1. 암호화 하지 않았을 때
  - 미들웨어 설정 >> app.use(cookieParser())
  - 쿠키 설정 >> res.cookie(이름, 값, 옵션)
  - 쿠키 확인 >> req.cookies 객체에서 확인
  - 쿠키 삭제 >> res.clearCookie(이름, 값, 옵션)

    쿠키 삭제만 하는 것이고 응답 완료까진 하지 않음
    이름, 값, 옵션이 일치해야 삭제됨
    (expires, maxAge ㅇ옵션은 일치하지 않아도 됨)
*/

/*
ver2. 암호화된 쿠키
  - 미들웨어 설정 >> app.use(cookieParser('특정 문자열'))
    - 임의의 문자열을 개발자가 정하는 것
  - 쿠키 설정 >> res.cookie로 설정 & signed: true 옵션으로 설정
  - 쿠키 확인 >> req.signedCookie  객체에서 확인
  - 쿠키 삭제 >> ver1과 동일
*/
