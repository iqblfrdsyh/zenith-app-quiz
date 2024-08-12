const express = require("express");
const router = express.Router();

const {
  getUser,
  signup,
  signin,
  signout,
  isLogin,
  updateUser,
} = require("../controllers/user.controller");
const { verifyToken } = require("../middleware/verifyToken");
const { refreshToken } = require("../helper/refreshToken");

router.get("/user", getUser);
router.post("/user/signup", signup);
router.post("/user/signin", signin);
router.put("/user/update", updateUser);
router.delete("/user/signout", signout);
router.get("/user/me", verifyToken, isLogin);
router.get("/token", refreshToken);

module.exports = router;
