//const Visitor = require("../model/Visitor");
const Visitors = require("../models/Visitor");
const models = require("../models");

exports.main = (req, res) => {
  res.render("index");
};

// GET /visitors
exports.getVisitors = (req, res) => {
  // visitor.ejs에 데이터 보내주기
  // 1. [DB 연결 전, 임시 데이터베이스]
  /* console.log(Visitor.getVisitors()); //[{},{}]
  res.render("visitor", { data: Visitor.getVisitors() }); */

  // 2. [DB연결 후!]
  // Visitor.getVisitors((result) => {
  //   console.log("CVisitor.js 전체목록::", result);
  //   res.render("visitor", { data: result });
  // });

  // 3. [sequelize 연결]
  models.Visitor.findAll().then((result) => {
    console.log("findAll >> ", result);
    res.render("visitor", { data: result });
  });
};

// GET /visitor/:id
exports.getVisitor = (req, res) => {
  console.log(req.params);
  console.log(req.params.id);

  // [before sequelize]
  // Visitor.getVisitor(req.params.id, (result) => {
  //   console.log("Cvisitor.js 데이터 하나 조회", result); // {}
  //   res.send(result);
  // });

  //[after sequelize]
  // 'SELECT# FROM visitor where id=${id}'
  models.Visitor.findOne({
    where: { id: req.params.id },
  }).then((result) => {
    console.log(result); // findOne은 애초에 하나만 온다. {}
    res.send(result);
  });
};

// POST /visitor
exports.postVisitor = (req, res) => {
  console.log(req.body); // { name, comment}
  // [before sequelize]
  // Visitor.postVisitor(req.body, (result) => {
  //   console.log("Cvisitor.js post", result);
  //   res.send({ id: result, name: req.body.name, comment: req.body.comment });
  // });

  //[after sequelize]
  models.Visitor.create({
    name: req.body.name,
    comment: req.body.comment,
  }).then((result) => {
    console.log(result);
    //res.send({ id: result, name: req.body.name, comment: req.body.comment });
    res.send(result);
  });
};

// DELETE /visitor
exports.deleteVisitor = (req, res) => {
  console.log(req.body);
  console.log(req.body.id);
  // Visitor.deleteVisitor(req.body.id, (result) => {
  //   console.log("Cvisitor.js delete", result);
  //   res.send("몇 번 방명록 삭제 완료!");
  // });

  //[after sequelize]
  // `DELETE FROM visitor WHERE id=${id}`
  models.Visitor.destroy({
    where: { id: req.body.id },
  }).then((result) => {
    console.log("sequelize destroy result", result); // 1(true), 0(false)
    res.send(req.body.id + "번 방명록 삭제 완료!");
  });
};

// PATCH /visitor
exports.patchVisitor = (req, res) => {
  console.log(req.body); //{id, name, comment}

  // [before sequelize]
  // Visitor.patchVisitor(req.body, (result) => {
  //   console.log("Cvisitor.js patch", result);

  //   res.send("수정 완료");
  // });

  //[after sequelize]
  models.Visitor.update(
    {
      name: req.body.name,
      comment: req.body.comment,
    },
    {
      where: { id: req.body.id },
    }
  ).then((result) => {
    res.send(req.body.id + "번 방명록 수정");
  });
};

//실습 회원가입/로그인
exports.signupPage = (req, res) => {
  res.render("signup");
};

exports.loginPage = (req, res) => {
  res.render("login");
};