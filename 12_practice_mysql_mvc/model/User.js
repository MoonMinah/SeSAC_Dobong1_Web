// TODO: DB(mysql) 연결
// TODO: 모델 코드

//  MySQL 연결
const mysql = require("mysql");
const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "0000",
  database: "sesac",
});

/*  뷰에서 요청
    -> 컨트롤러에서 정보를 받고 모델로 줌(req.body or req.query or req.params ...)
    -> 모델에서 DB로 요청
    -> 데이터 삽입/삭제/조회/.. 결과값을 컨트롤러로 응답
    -> 컨트롤러에서는 res 객체를 통해 뷰로 응답
    뷰 -> 컨트롤러 -> 모델 -> DB모델 -> 컨트롤러 > 뷰
*/
//  POST/user/signup
//  특정 회원정보 등록
exports.post_signup = (data, cb) => {
  console.log("model", data); // {userid, pw, name}

  const sql = `INSERT INTO user(userid, name, pw) VALUES('${data.userid}','${data.name}','${data.pw}')`;
  conn.query(sql, (err, rows) => {
    if (err) throw err;
    console.log("rows", rows);

    cb();
  });
};

//  POST/user/signin
//  특정 회원정보 '조회'
exports.post_signin = (data, cb) => {
  console.log("model", data); //{userid, pw}
  const sql = `SELECT * FROM user
                WHERE userid='${data.userid}' AND pw='${data.pw}' LIMIT 1`;
  //LIMIT 1 걸어주는 이유
  // 회원가입시 중복id 검사하지 않아서
  // select의 결과가 여러개 일 수 있음
  conn.query(sql, (err, rows) => {
    if (err) throw err;
    console.log("rows", rows); // [{id, userid, name, pw}]

    cb();
  });
};

exports.post_profile = (id, cb) => {
  console.log("model uerid", id); // id='allie
  const sql = `SELECT * FROM user WHERE userid='${id}' Limit 1`;
  conn.query(sql, (err, rows) => {
    if (err) throw err;
    console.log("model", rows); // [{}]
    cb(rows[0]);
  });
};

//  POST/user/profile/edit
// 회원정보 수정
exports.edit_profile = (data, cb) => {
  console.log("model", data);
  const wql = `UPDATE user
    SET name='${data.name}', pw='${data.pw}' WHERE ID='${data.id}'`;
  conn.query(sql, (err, rows) => {
    if (err) throw err;

    console.log("model edit", rows);
    cb();
  });
};

//  POST/user/profile/delte
// 회원정보 삭제
exports.delete_profile = (id, cb) => {
  console.log("model delete id", id);
  const sql = `DELETE FROM user WHERE id=${id}`;
  conn.query(sql, (err, rows) => {
    if (err) throw err;

    cb();
  });
};
