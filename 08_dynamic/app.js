const express = require("express");
const app = express();
const PORT = 9090;

app.set("view engine", "ejs");
app.set("views", "./views");

// 밑의 두줄이 있어야 body-parser로 읽고 쓸 수 있다.
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("index");
});

// ajax 라우팅
app.get("/ajax", (req, res) => {
  console.log(req.query);
  //   res.send("ajax 응답완료");
  //   res.send({
  //     name: req.query.name,
  //     gender: req.query.gender,
  //   });
  res.send(req.query);
});

app.post("/ajax", function (req, res) {
  console.log(req.body);
  res.send(req.body);
});

// axios
app.get("/axios", function (req, res) {
  console.log(req.query);
  res.send(req.query);
});

app.post("/axios", function (req, res) {
  console.log(req.body);
  res.send(req.body);
});

// fetch
app.get("/fetch", function (req, res) {
  console.log(req.query);
  res.send(req.query);
});

app.post("/fetch", function (req, res) {
  console.log(req.body);
  res.send(req.body);
});

//open API 사용
app.get("/open-api", function (req, res) {
  res.render("api");
});

// 실습문제 axiosGet
app.get("/practice1", (req, res) => {
  res.render("practice/practice1.ejs");
});
app.get("/axiosGet", function (req, res) {
  console.log(req.query);
  res.send(req.query);
});

// 실습문제 axios post
app.get("/practice2", (req, res) => {
  res.render("practice/practice2.ejs");
});
app.post("/axiosPost", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.get("/test", (req, res) => {
  res.render("test");
});
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
