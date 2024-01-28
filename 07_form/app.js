const express = require("express");
const app = express();
const PORT = 9090;

app.set("view engine", "ejs");
app.set("views", "./views");
//post요청시 body에 실려오는 정보를 얻어오기위해 body-parser미들웨어 등록
app.use(express.urlencoded({ extended: true })); //true false 상관 없다
app.use(express.json()); //json 형식으로 데이터를 주고 받음

app.get("/", function (req, res) {
  res.render("index"); //확장자 index는 써도되고 안써도 된다.
});

app.get("/getForm", function (req, res) {
  console.log(req.query);
  //res.send("데이터 잘 받았습니다.");
  res.render("result", {
    title: "GET",
    userInfo: req.query, //{id:'', email:'', pw:''}
  });
  //  res.render('뷰', {보내줄 데이터})
});

app.post("/postForm", function (req, res) {
  //정보가 post에서는 body에 실려온다. get에서는 query
  console.log(req.body);
  //send는 보내고 나서 응답완료까지 한 상태라 render와 쓸 수 없다.
  // res.send(`
  // <ul>
  // <li>${req.body.id2}<li>
  // <li>${req.body.pw2}<li>
  // </ul>
  // `);
  console.log("안녕하세요");
  res.render("result.ejs", {
    // .ejs는 써도되고 안써도 된다.
    title: "POST",
    userInfo: req.body, //{id:'', pw:'', agree:[]}
  });
});

app.post("/js-form-check", (req, res) => {
  console.log(req.body);
  res.send("validation 응답");
});

/*실습문제 */
/*
  practice1
  practice2
*/
app.get("/practice1", (req, res) => {
  res.render("practice/practice1.ejs");
});
app.get("/practice2", (req, res) => {
  res.render("practice/practice2.ejs");
});

app.get("/practice", (req, res) => {
  console.log(req.query);
  //res.send("응답 완료");
  res.render("practice/result.ejs", {
    userInfo: req.query,
    addInfo: false,
  });
});
app.post("/practice", (req, res) => {
  //app.get app.post로 다르게 썼기 때문에 /practice 같은 경로 쓰기 가능
  console.log(req.body);
  const postInfo = req.body;
  res.render("practice/result", {
    userInfo: postInfo,
    addInfo: true,
  });
});

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
