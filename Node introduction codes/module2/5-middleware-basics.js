const express = require('express')
const app = express()
const logger = require('./logger')
const authorize = require('./authorize')


/// request => MIDDLEWARE => resourse

///this invokes the middleware for paths starting with /api
//app.use('/api',logger)

///using multiple functions 
app.use([logger,authorize])


app.get('/',(req,res)=>{
    res.send('Home')
})

app.get('/about',(req,res)=>{
    res.send('About')
})

app.get('/items',(req,res)=>{
    console.log(req.user)
    res.send('Items')
})
//we can also use middleware for specific routes
//app.get('/items',[logger,authorize],(req,res)=>{
//    console.log(req.user)
//    res.send('Items')
//})

app.listen(5000, ()=>{
    console.log('Server is listening on port 5000....')
})