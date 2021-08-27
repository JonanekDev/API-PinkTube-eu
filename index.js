const express = require("express");
const rateLimit = require("express-rate-limit");
require("dotenv").config();

const app = express();


app.use("/api/reddit/", rateLimit({
    windowMs: 60 * 1000, 
    max: 120
}))

app.use("/api/weather/", rateLimit({
    windowMs: 60 * 1000, 
    max: 50
}))

app.use("/api/reddit", require("./reddit"));
app.use("/api/weather", require("./weather"));


const port = process.env.API_PORT || 6969;
app.listen(port, () => console.log("API běží na portu " + port));