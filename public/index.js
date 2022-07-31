// const e = require("express");
const express=require('express')
const app=express();
const hbs=require("hbs")
const fs=require("fs")
const requests=require("requests")
const port=process.env.PORT || 8001;
const path =require("path")

const pth=path.join(__dirname,"../template/views")
const pth2=path.join(__dirname,"../template/partials")

// console.log(pth2);
// console.log(pth);



app.set('view engine', 'hbs');

app.set("views",pth)
hbs.registerPartials(pth2)

app.get("/",(req,res)=>{
    res.render("index",{
        mandeep:"nam"
    })
}) 
app.get("/about", (req,res)=>{
    res.render("about")
})
app.get("/weather", (req,res)=>{
    res.render("weather")
})
app.get("/index", (req,res)=>{
    res.render("index")
})
app.get("/about/*", (req,res)=>{
    res.render("404",{
        message:"page does not   exit"
    }) 
}) 

app.get("*", (req,res)=>{
    res.render("404",{
        message:"sorry page does not exit"
    })  
    // res.send()
})

app.listen(port,()=>{
    console.log(`listin port ${port}`)
})

