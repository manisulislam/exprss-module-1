const express = require("express");
const app = express();
app.get("/", (req, res)=>{
    res.send("server completed");
})
app.post("/",(req, res)=>{
    console.log(req.body);
    res.send("this is the post method home page");

})
app.listen(3000, ()=>{
    console.log("server is running in 3000");
})