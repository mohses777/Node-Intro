const express = require("express")
const app = express()

app.get('/',(req,res)=>{
    console.log('home gotten')
    res.send('HOMEPAGE')
})

app.get('/about',(req,res)=>{
    console.log('about gotten')
    res.send("ABOUTPAGE")
})

//404 response
app.all('*',(req,res)=>{
    res.status(404).send('RESOURCE NOT FOUND')
})

app.listen(5000, ()=>{
    console.log('server is listening on port 5000')
})