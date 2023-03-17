const express = require("express");
const {
  signUp,
  login,
  getAllUser,
  getSingleUser,
  deleteUser,
  logoutUser,
} = require("../controllers/user.controller");
const auth = require("../middlewares/auth");
const router = express.Router();

router.post("/register", signUp);
router.post("/login", login);
router.get("/", auth, getAllUser);
router.get("/:id", auth, getSingleUser);
router.delete("/:id", auth, deleteUser);
router.post("/logout", auth, logoutUser);

module.exports = router;
