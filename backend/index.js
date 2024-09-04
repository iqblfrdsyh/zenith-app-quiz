require("dotenv").config();

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const routes = require("./routes/index");
const app = express();

const PORT = process.env.PORT;

app.use(
  cors({
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    origin: ["http://localhost:3000"],
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.json({ status: 200, msg: "Welcome to Backend Zenith!" });
});

app.get("/api/v1", (req, res) => {
  res.json({ status: 200, msg: "API Ready!" });
});

Object.values(routes).forEach((route) => {
  app.use("/api/v1", route);
});

app.get("*", (req, res) => {
  res.json({
    status: 404,
    msg: `Not found route : ${req.params[0]}`,
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
