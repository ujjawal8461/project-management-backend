require("dotenv").config();
const express = require('express');
const authRoutes = require("./routes/auth.routes");

const app = express();

app.use(express.json());

app.use("/auth", authRoutes);

app.get("/health", (req, res) => {
    res.json({ satus: "OK", message: "Server is running baby" });
})

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`)
})