const express = require('express')
const router = express.Router()

//Path -/users
//Get - /users/login
//path -/login
//render -login.ejs

router.get('/login',(req,res)=>{
res.render('login.ejs')
})

//get
//path - /users/login
//render - signup.ejs

router.get('/signup', (req, res)=>{
    res.render('signup.ejs')
})

module.exports = router;