const express = require('express');
const {write} = require('../controllers/board.controller.js')
const boardRouter = express.Router()

boardRouter.use(function Log(req, res, next) {
    console.log('### 게시판 ###');
    next();
});

boardRouter.post("/write", test)

module.exports = boardRouter;