const express = require("express");
const app = express();
//console.log(process.env);

//  .env에서 만들어둔 환경변수를 읽어오기 위한 설정
const dotenv = reqire("dotenv");
dotenv.config();

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  console.log("mySQL 패스워드", process.env.MYSQL_PASSWORD);
  console.log("mySQL 패스워드", process.env.API_KEY);
  res.send("응답완료");
});

app.listen(9090, () => {
  console.log(`${PORT} is open`);
});
