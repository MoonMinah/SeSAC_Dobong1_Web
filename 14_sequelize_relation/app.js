const express = require("express");
const app = express();
const PORT = 9090;
const router = require("./routes");
const { sequelize } = require("./models");

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", router);

sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.log(err));
