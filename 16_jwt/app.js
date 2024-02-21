const express = require("express");
const app = express();
const PORT = 9090;
const jwt = require("jsonwebtoken");
const SECRET = "p0DVLwue0qC0PTbymqW24hLwyUPy7D"; //랜덤 문자열

// middleware
app.set("views", "./views");
app.set("view engine", "ejs");
//app.use("/static", express.static(__dirname + "/static"));

// body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const userInfo = { id: "cocoa", pw: "1234", name: "코코아", age: 18 };

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/login", (req, res) => {
  res.render("login");
});

// 로그인 요청
// jwt 생성
app.post("/login", (req, res) => {
  try {
    console.log(req.body);
    res.send("서버 콘솔 확인");

    const { id, pw } = req.body;
    const { id: realId, pw: realPw } = userInfo;
    if (id === realId && pw === realPw) {
      // jtw 인증 생성 토큰
      // const token = jwt.sign(payload, secret/private key, option)
      const token = jwt.sign({ id: id }, SECRET);
      console.log(token);
      res.send({ result: true, token });
    } else {
      res.send({ result: false, message: "로그인 정보가 올바르지 않습니다." });
    }
  } catch (err) {
    console.log("POST/login", err);
    res.status(500).send("server error");
  }
});
app.post("/token", (req, res) => {});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
