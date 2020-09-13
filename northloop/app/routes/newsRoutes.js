module.exports = app => {
    const newsData = require("../controllers/newsController.js");

    var router = require("express").Router();

  router.get("/", newsData.findAllNews);
    app.use('/api/news', router);
  };
