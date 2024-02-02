const express = require("express");
const app = express();
const PORT = 3000;
const multer = require("multer");
const path = require("path");

//미들웨어
//html을 보여주기위한 view engine을 ejs로 쓸거라는 설정
app.set("view engine", "ejs");
//html관련 눈에 보이는 파일들을 view에 모아놓았다는 설정
app.set("views", "./views");

//static 폴더 설정
//프론트에서 사용하는 애들의 모음
//한번 빌드하면 서버에 모두 저장하여 쭉 읽는다.
//여기서는 upload 파일를 static으로 설정하여 프론트에서 upload안의 이미지를 읽어서 사용
app.use("/uploads", express.static(__dirname + "/uploads"));
//app.use('어떤이름으로 사용', express.static폴더에 있는 (__dirname + '이 경로를'));

//body-parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//multer
const upload = multer({
  dest: "uploads/", //uploads에 올려달라는 설정.
});
//multer세부설정
/* 
multer 디테일 설정
- storage: 저장공간에 정보
    diskStorage: 파일을 저장하기 위한 모든 제어기능 제공
    - destination: 저장 경로
    - filename: 파일 이름 관련 정보
- limits: 파일 제한 관련 정보
    - fileSize: 파일 사이즈를 바이트 단위로 제한
*/
const uploadDetail = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads/");
    },

    filename: function (req, file, done) {
      const extension = path.extname(file.originalname); //확장자 추출 & 모듈을 require로 불러줘야한다.
      //const extension = path.extname(파일의 원본이름);
      done(
        null,
        path.basename(file.originalname, extension) + Date.now() + extension
      );
      //done(null, path.basename(원본이름 가져오기)+현재시간관련숫자를 붙여준다 +확장자를 붙여준다);
      //원본이름이 같은 파일방지
      //path.basename()은 내가 정해준 이름이 들어간다.
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});

//라우팅
app.get("/", function (req, res) {
  res.render("index");
});

// /upload라는 요청이 들어오면 동작을 function(req,res){}안에서 처리
/* multer를 이용하기 위해 콜백함수인 function(req,res){} 앞에 설정
    파일 하나를 보내기때문에 single을 써주고
    single의 함수는 input파일의 name="userfile"이 인자로 들어온다
*/
//app.post("/upload", upload.single("userfile"), function (req, res) {
app.post("/upload", uploadDetail.single("userfile"), function (req, res) {
  console.log(req.file); //file정보가 들어온다.
  console.log(req.body); //text정보가 들어온다. -> body에 접근하려면 body-parser를 설정해야한다.
  /*{
  fieldname: 'userfile',    //form에 정의한 name값
  originalname: 'pooh.png', //원본 파일명
  encoding: '7bit',         //file encoding type
  mimetype: 'image/png',    //파일타입
  destination: 'uploads/',  //파일 저장 경로
  filename: '40ffec3f235cc48b72255409f7dc62b1', //무작위로 저장된 파일이름
  path: 'uploads\\40ffec3f235cc48b72255409f7dc62b1', //경로 포함된 파일이름
  size: 176304             //byte 기준 파일 크기
}
   */

  //form전송이 끝나고 나서 전환된 페이지에 어떤 응답?
  res.send("파일 업로드 완료");
});

app.post(
  "/uploads/array",
  uploadDetail.array("multifiles"),
  function (req, res) {
    console.log(req.files); // [{..},{}] 배열로 요청됨, 파일을 하나만 업로드해도 배열
    console.log(req.body);

    //form전송이 끝나고 나서 전환된 페이지에 어떤 응답?
    res.send("파일 업로드 완료");
  }
);

app.post(
  "/uploads/fields",
  uploadDetail.fields([
    { name: "file1" },
    { name: "file2" },
    { name: "file3" },
  ]),
  function (req, res) {
    console.log(req.files);
    /*  객체로 정보가 들어온다.
    {file1:[{},{}], file2:[{},{}], name속성:[{파일정보},{파일정보}]}
    */
    //따라서 파일 제어하고 싶다면 아래와같이 접근해야한다.
    console.log(req.files.file1[0].originalname);

    console.log(req.body);
    res.send("업로드 완료");
  }
);

app.listen(PORT, () => {
  console.log(`${PORT} is open`);
  console.log(`http://localhost:${PORT}`);
});
