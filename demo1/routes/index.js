const express = require('express')
const router = express.Router()

//GET request-
//Path
//render - index.ejs
router.get('/', (req,res)=>{
res.render('index.ejs')
}
)



module.exports = router;