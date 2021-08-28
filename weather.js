const express = require("express");
const axios = require("axios");

const router = express.Router();

router.get("/*", (req, res, next) => {
    if (!process.env.OPENWEATHERMAP_API_TOKEN) {
        res.json({ status: "KO", errCode: 2})
    } else {
        next();
    }
})

router.get("/:Mesto/current", (req, res) => {
    axios.get("https://api.openweathermap.org/data/2.5/weather?q=" + encodeURI(req.params.Mesto) + "&appid=" + process.env.OPENWEATHERMAP_API_TOKEN + "&units=metric&lang=cz")
    .then((ApiData) => {
        res.json(ApiData.data);
    })
    .catch((err) => {
        res.json({status: "KO", e: err});
    })
})

module.exports = router;