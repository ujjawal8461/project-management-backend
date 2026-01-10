const register = (req, res) => {
    const { email, password } = req.body;

    console.log("Rgister API Called");
    console.log("Api req:", req.body, email, password);

    if (!email || !password) {
        return res.status(400).json({
            message: "Email or Passowrd are required"
        })
    }

    return res.status(201).json({
        message: "User Registered Succefully"
    })

}

const login = (req, res) => {
    const { email, password } = req.body;
    console.log("login")

    if (!email || !password) {
        return res.status(400).json({
            message: "Email or Passowrd are required"
        })
    }

    if (email !== "rahul@gmail.com") {
        return res.status(404).json({
            message: "User Not Found"
        })
    }
    if (email === "rahul@gmail.com" && password !== "12345678") {
        res.status(401).json({
            message: "Password is wrong"
        })
    }

    return res.status(200).json({
        message: "Succesfuly Login"
    })
}

module.exports = { register, login };