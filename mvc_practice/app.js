const express = require("express");
const app = express();
const PORT = 9090;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const indexRouter = require("./routes");
// localhost:9090/ 경로를 기본으로 하는 경로는
// indexRouter에서 처리
app.use("/", indexRouter);

app.get("*", (req, res) => {
  res.render("404");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
