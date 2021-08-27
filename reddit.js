const express = require("express");
const axios = require("axios");

const router = express.Router();

router.get("/:RedditName/randompost", (req, res) => {
    axios.get("https://www.reddit.com/r/" + req.params.RedditName + "/top/.json")
    .then((ApiData) => {
        const data = ApiData.data;
        let tries = 0;
        function RandomPost() {
            const randompost = data.data.children[Math.floor(Math.random() * data.data.children.length)].data;
            if (tries > 10) {
                res.json({ status: "KO", errCode: 1})
            } else if (req.query.onlyPhotos == "true" & (randompost.post_hint == "rich:video" || randompost.is_video == true)) {
                setTimeout(() => {
                    RandomPost();
                }, 10);
                tries = tries + 1;
            } else if(req.query.noNSFW == "true" & randompost.over_18 == true) {
                setTimeout(() => {
                    RandomPost();
                }, 10);
                tries = tries + 1;
            } else {
                res.json({ status: "OK", post: {url: randompost.url, thumbnail: randompost.thumbnail, title: randompost.title, author: randompost.author_fullname, ups: randompost.ups, postlink: "https://www.reddit.com/" + randompost.permalink} })
            }
        }
        RandomPost();
        
    })
})

module.exports = router;