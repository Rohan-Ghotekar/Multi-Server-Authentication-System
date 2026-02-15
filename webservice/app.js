var createError = require('http-errors');

const express = require("express");
const cors = require("cors");
const loginRouter = require("./public/javascripts/routes/login");
const registerRouter=require("./public/javascripts/routes/register");
require("dotenv").config("./.env");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/webservice/login", loginRouter);
app.use("/webservice/register",registerRouter);

// app.listen(process.env.PORT, () => {
//     console.log(`API running on port ${process.env.PORT}`);
// });

module.exports = app;