const express = require("express");
const authNiddleware = require("../middlewares/auth.middleware");
const { register, login } = require("../controllers/auth.controller");

const router = express.Router();

router.get("/protected", authNiddleware, (req, res) => {
    res.json({ message: "You Haved reached the protected route", user: req.user })
});

router.post("/register", register)

router.post("/login", login)

module.exports = router