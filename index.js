const express = require("express");

const fs = require("fs");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/',(req,res)=>{
    
    return res.end("server is running");
})

app.get('/getpassword',(req,res)=>{
    const password = fs.readFileSync("./pass.txt","utf8")

    return res.status(200).json({password:password})
})

app.post('/updatepassword',(req,res)=>{
    
    fs.writeFileSync("./pass.txt",req.body.password,"utf8");

    return res.sendStatus(200);
})

app.get('/proxy',(req,res)=>{

    return res.redirect("https://hentaihaven.xxx/");
})

const port = 8000||process.env.PORT
app.listen(port,(err)=>{
    if(err){
        console.log("Error in starting server",err);
        return;
    }
    console.log("Server is up and running at port: ",port);
})
