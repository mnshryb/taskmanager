const express = require("express");
const app = express ();
const bodyParser = require("body-parser")
const cors = require("cors");
const AuthRouter = require("./Routes/AuthRouter")

require ("dotenv");
require ("./Models/db");
const port = process.env.PORT || 8080;

app.get("/ping", (req,res)=>{
    res.send("pong");
});

app.use(bodyParser.json());
app.use(cors());
app.use("/auth", AuthRouter);

const PORT = process.env.PORT || 8080;

app.listen(PORT, ()=>{
    console.log(`server is running on ${PORT}`)
});