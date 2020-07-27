var express=require("express");
let app=express();

//Problem 1.1.1:
app.get('/', (req,res)=>{
    res.send('hello world')
})
app.listen(5002,()=>console.log("started"))

// Problem 1.1.2:
let app2 =express()
app2.get("/", (req,res)=>{
    res.send( {name:"fastTrack", name:"Sonata"})
})

app2.get("/home", (req,res)=>{
    res.redirect("/redirectedroute")
})
app2.listen(5000,()=>console.log("2 started"))

// Problem 1.1.3:
let app3 =express()

app3.get("/", (req,res)=>{
    let date=new Date()
    res.send("Time"+ date.toLocaleTimeString()) 
})

let count=0

app3.get("/count", (req,res)=>{
    count++
    res.send({count:count})
})

app3.listen(5001,()=>console.log("3 started"))