const express = require('express')
const app = express()
const bodyParser = require('body-parser')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : false}))

app.get('/',(req,res)=>{
    res.sendFile(__dirname + 'index.html')
})

app.get('/express',(req,res)=>{
    res.redirect('https://expressjs.com')
})

app.get('/nodemon',(req,res)=>{
    res.redirect('https://nodemon.io')
})

app.listen('3000')