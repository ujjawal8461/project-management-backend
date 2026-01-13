const { users } = require("../utils/inMemoryUserStorage")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../../config/env")

const register = async (req, res) => {
    const { email, password } = req.body;

    console.log("Rgister API Called");
    // console.log("Api req:", req.body, email, password);

    console.log(users);
    if (users.find(u => u.email === email)) {
        return res.status(409).json({
            message: "User Already Exisit"
        })
    }

    if (!email || !password) {
        return res.status(400).json({
            message: "Email or Passowrd are required"
        })
    }

    const hashbPassword = await bcrypt.hash(password, 10)

    users.push({ email, password: hashbPassword });
    console.log(users);

    return res.status(201).json({
        message: "User Registered Succefully"
    })

}




const login = async (req, res) => {
    const { email, password } = req.body;
    console.log("login")

    if (!email || !password) {
        return res.status(400).json({
            message: "Email or Passowrd are required"
        })
    }

    const user = users.find(u => u.email === email)
    if (!user) {
        return res.status(404).json({
            message: "User Not Found"
        })
    }

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
        return res.status(401).json({
            message: "Password is wrong"
        })
    }

    const token = jwt.sign({ email: user.email }, JWT_SECRET, { expiresIn: "1h" });

    return res.status(200).json({
        message: "Succesfuly Login",
        token
    })
}

module.exports = { register, login };