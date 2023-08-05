///sending information to the server
/// querying data based on certain parameters, including , title, time, date etc
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
///user api to search for a particular product or limit products from database
app.get('/api/v1/query',(req,res)=>{
    //console.log(req.query)
    const {search,limit} = req.query;
    let sortedProducts = [...products];

    if(search){
        sortedProducts = sortedProducts.filter((product) =>{
            return product.name.startsWith(search)
        })
    }
    if(limit){
        sortedProducts = sortedProducts.slice(0,Number(limit))
    }
    if(sortedProducts.length < 1){
        //res.status(200).send("no products matched your search")
        return res.status(200).json({success:true, data:[]})
    }
    res.status(200).json(sortedProducts)

})


app.listen(5000, ()=>{
    console.log("Server is listening on port 5000....")
})