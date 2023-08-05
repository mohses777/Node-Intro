////from the api, getting the products by id,or a particular convention
const express = require('express')
const app = express()
const {products} = require('./data')

app.get('/',(req,res)=>{
    res.send('<h1> HomePage </h1><a href="/api/products">products<a/>')
})
//user api to view all products in the database
app.get('/api/products',(req,res)=>{
    const newProducts = products.map((product)=>{
        const {id,name,image} = product;
        return {id,name,image}
    })
    res.json(newProducts)
})
//user api to view a particular selected product by id
app.get('/api/products/:productID',(req,res)=>{
    const {productID} = req.params;
    const singleProduct = products.find((product) => product.id == Number(productID))
    if(!singleProduct){
        return res.status(404).send("Product Does Not Exist")
    }
    return res.json(singleProduct)
})


app.listen(5000, ()=>{
    console.log("Server is listening on port 5000....")
})