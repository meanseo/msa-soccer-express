const express = require("express");
const todoRouter = express.Router();

todoRouter.use(function Log(req, res, next) {
    console.log('### 사용자 서버 ###');
    next();
});

module.exports =todoRouter;