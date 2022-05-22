const express = require('express')
const app = express();
app.get("/abc",(req,res)=>res.json({"msg":"ok"}))
app.listen(9999,()=>console.log('server is running at port 9999'));