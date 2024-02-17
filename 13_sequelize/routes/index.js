const express = require("express");
const router = express.Router();
const controller = require("../controller/Cvisitor");

// 렌더링, get 요청
router.get("/", controller.main);
router.get("/visitors", controller.getVisitors);
router.get("/visitor/:id", controller.getVisitor);
// router.get("/visitor", controller.getVisitor2); // 쿼리로 값을 받을 때

// 등록, 삭제, 수정
router.post("/visitor", controller.postVisitor);
router.delete("/visitor", controller.deleteVisitor);
router.patch("/visitor", controller.patchVisitor);

// 로그인 회원가입
router.get("/signup", controller.signupPage);
//router.post("/signup".controller.signup);
router.get("/login", controller.loginPage);

module.exports = router;
