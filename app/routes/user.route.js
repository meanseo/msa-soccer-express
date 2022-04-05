const express = require("express");
const userRouter = express.Router();

userRouter.use(function Log(req, res, next) {
    console.log('### 사용자 서버 ###');
    next();
});
userRouter.post('/sign-up',(req, res)=>{
 const {username, password, name, telephone} = req.body
 console.log(`JSON에서 넘어온 값: ${JSON.stringify(req.body)}`)
 res.json(req.body.name)
})

module.exports = userRouter;