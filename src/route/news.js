const express = require("express");
const newsRouter = express.Router();
const axios = require("axios");

newsRouter.get("/",  async (req, res) => {

    try {
        const newsApi = await axios.get('https://raddy.co.uk/wp-json/wp/v2/posts/');
        res.render('news', {articles : newsApi.data});
    }
    catch {

    }
});


newsRouter.get("/:id",  async (req, res) => {
let articleId = req.params.id;
    try {
        const newsApi = await axios.get(`https://raddy.co.uk/wp-json/wp/v2/posts/${articleId}`);
        res.render('newsSingle', {article : newsApi.data});
    }
    catch {

    }
});

module.exports = newsRouter;
    