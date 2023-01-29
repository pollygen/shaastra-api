import express from "express"

const app = express()

app.get("/",(req,res)=>{
    res.send("Hello world")
})

app.listen(3005,()=>{
    console.log("Listening on port 3005");
})