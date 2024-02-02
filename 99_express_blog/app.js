const express = require("express");
const path = require("path");
const multer = require("multer");

const app = express();
const PORT = 9090;

/* temp DB
    임시 데이터 베열형태로 만들어서 화면에 띄워주는 작업
*/

const tempDB = [
  {
    contentID: 1,
    title: "글제목1",
    content: "글 내용1",
    img: null, //null or path(string)
  },
  {
    contentID: 2,
    title: "글제목2",
    content: "글 내용2",
    img: null, //null or path(string)
  },
  {
    contentID: 3,
    title: "글제목3",
    content: "글 내용3",
    img: null, //null or path(string)
  },
  {
    contentID: 4,
    title: "글제목4",
    content: "글 내용4",
    img: null, //null or path(string)
  },
];

const userID = "PORORO❤";

/*  미들웨어란?
    요청(request)과 응답(response) 사이에서 중간다리 역할을 하는 SW
     1. request의 body를 서버에서 읽을 수 있도록 도와주는 "body-parser"
     2. request의 file에서 보내는 파일 정보를 확인할 수 있도록 도와주는 "multer"
     3. static 파일 설정을 도와주는 app.use(express.static(~))
    등 등
*/

/* 미들웨어1 - views 설정 (set()이용) */
