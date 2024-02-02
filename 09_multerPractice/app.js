const express = require("express");
const app = express();
const PORT = 3000;
const multer = require("multer");
const path = require("path");

//미들웨어
//view 관련
app.set("view engine", "ejs");
app.set("views", "./views");

//static 관련
app.use("/uploads", express.static(__dirname + "/uploads"));
app.use("/public", express.static(__dirname + "/static"));

//body-parser관련
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//multer 관련
const upload = multer({
  dest: "uploads/",
});
//multer 세부설정
const uploadDetail = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads/");
    },
    filename: function (req, file, done) {
      const extension = path.extname(file.originalname);
      done(null, path.basename(file.originalname, extension) + Date.now());
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});

//라우팅
app.get("/", function (req, res) {
  res.render("index");
});

app.post("/upload", uploadDetail.single("userfile"), function (req, res) {
  console.log(req.file);
  console.log(req.body);
  res.render("result", {
    id: req.body.id,
    pw: req.body.pw,
    name: req.body.name,
    age: req.body.age,
    file: req.file.path, //파일에 관련된 정보중에 path만 보내면 된다.
  });
});

app.listen(PORT, () => {
  console.log(`${PORT} is open!!`);
  console.log(`http://localhost:${PORT}`);
});
