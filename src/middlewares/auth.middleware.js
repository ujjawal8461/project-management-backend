const jwt = require("jsonwebtoken");

const authNiddleware = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization
        if (!authHeader) {
            return res.status(401).json({
                message: "Token Not Found"
            })
        }

        const token = authHeader.split(" ")[1];
        console.log("Token from the api:->", token);

        if (!token) {
            return res.status(401).json({
                message: "Invalid Token"
            })
        }

        const decode = jwt.verify(token, process.env.JWT_SECRET);

        req.user = {
            userId: decode.userId,
            email: decode.email,
        }

        console.log("Auth Middleware Trigered ")
        next();
    } catch (error) {
        return res.status(401).json({
            message: "Unauthorized User",
        })
    }
}

module.exports = authNiddleware;