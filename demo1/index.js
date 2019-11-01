// import express module from npm

const express  = require('express')

const app = express()
const Port = 3000
const path = require('path')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended : false}))

app.set ('views',  path.join(__dirname, 'views'));
app.set('view engines', 'ejs')

// const friends = ["tom", "harry", "ron"];


// app.get('/', (req, res)=>{
//     res.render('index.ejs')
// })

const productController = require('./routes/productController')
const userController = require('./routes/userController')
const indexController= require ('./routes/index')

app.use('/', indexController)
app.use('/users', userController)
app.use('/product', productController)


// app.get('/product',(req, res)=>{
// res.render('product.ejs')
// })

// app.get('/login', (req, res)=>{
//     res.render('login.ejs')
// })




// //localhost:3000/form
// app.post('/form',(req,res)=>{
//     console.log(req.body)
//    friends.push(req.body.friends)
//     res.redirect('/')
// })

// //creating delete button

// app.post('/delete/:id', (req,res)=>{
// console.log('req.params', req.params.id)
// friends.map((friend,index) => {
//     console.log(index)
//     if(friend === req.params.id){
//      return friends.splice(index,1)
//     }
// })
// res.redirect('/')

// })

// //creating update button 
// app.post('/update/:id', (req, res)=>{
//     // console.log('req params update', req.params.id)
//     friends.map((value,index)=>{
//         if(value == req.params.id && req.body.update.length >0){
//             return friends.splice(index, 1, req.body.update)
//              }
//     })
   
//     res.redirect('/')
// })

//app - app mpodule
// get - http method- get request
//callback function - request and response as arguments
// // '/', this is the path -- http://localhost:3000/


// app.get('/', function(req, res){
//     // res.send("hello express")
//     res.json({"msg": "hello json response"})
// })

// app.get('/reddit', function(req, res){
//     res.send("this is reddit home page")
// })
// app.get('/download', (req,res)=>{
//     const file = path.join(__dirname, 'i.zip');
//     res.download(file);
// })


// app.get('/shivam/:name' ,(req,res)=>{
//     console.log("request", req.params)
//     res.send(`the req params are --  ${req.params.name}`)
// })

//http server to listen at port 3000

// const arr = ['a', 'b', 'c']
// app.get('/', (req, res)=>{
//     res.send(`the array is ${arr}`)
// })

app.listen(Port, ()=>console.log(`server is running at port ${Port}`))
