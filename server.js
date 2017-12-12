const express = require('express')
const hbs = require('hbs')
const fs = require('fs')

const port = process.env.PORT || 8080

var app = express();
//middleware lets you change express

app.set('view engine','hbs');

app.use(express.static(__dirname + '/public'))

app.use((req,res,next)=> {
    var now = new Date().toString();
    
    console.log(now,req.method,req.url)
})


app.use((req,res,next) => {
    var now = new Date
})

app.listen(process.env.PORT,() =>{
    console.log('server up')
})


app.get('/about',(req,res) => {
    res.render('about.hbs',{
        pageTitle: 'About Page',
        currentYear: new Date().getFullYear()
    })
})

//request and response
app.get('/',(req,res)=>{
    res.send({
        name: 'ian'
        
    });
})

//app.listen binds application to a port on the machine

