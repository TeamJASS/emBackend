import express from "express"

const app =express();

app.listen(8080,(req,res)=>{
    console.log('Listening on Port 8080');
});