const express = require('express')
const app = express()


app.get('/',(req,res)=>{
    res.send('<h1>Home page</h1>')
})

app.get('/contact',(req,res)=>{
    res.send('<h1>Contact page</h1><div></div><label>example@gmail.com</label>')
})

app.get('/express',(req,res)=>{
    res.redirect('https://expressjs.com')
})

app.get('/nodemon',(req,res)=>{
    res.redirect('https://nodemon.io')
})

app.listen('3000')