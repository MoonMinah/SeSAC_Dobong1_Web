const express = require("express");
const router = express.Router();

const controller = require("../controller/Cmain");

router.get("/", controller.main); //main이라는 함수를 만들어 사용

// GET /comments
router.get("/comments", controller.comments);

// GET /comment/:id (params 사용) >> comment.ejs
router.get("/comment/:id", controller.comment);

//한 번에 내보내기
module.exports = router;
