const PORT = 9090;
const express = require("express");
const app = express();
const db = require("./models");

// middleware
app.set("views", "./views");
app.set("view engine", "ejs");
app.use("/static", express.static(__dirname + "/static"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 라우터 분리
const indexRouter = require("./routes");
// const indexRouter = require('./routes/index')    //경로 마지막 index만 생략가능
app.use("/", indexRouter);

// /user
const userRouter = require("./routes/user");
app.use("./user", userRouter);

// 404 error
app.get("*", (req, res) => {
  res.render("404");
});

db.sequelize.sync({ force: false }).then((result) => {
  console.log(result);
  console.log("db연결 성공");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
