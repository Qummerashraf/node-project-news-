const express=require("express");
const path=require("path");
const ejs=require("ejs");
const bodyParser = require("body-parser");
 
  
const ip = '127.0.0.1';
const port =  '3000';
const app=express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './src/views'));

app.use(express.static('public'));
app.use('/css', express.static(__dirname+'public/css'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",(req,res)=>{
    res.end('index');
});
app.get("/data",(req,res)=>{
    res.end('data');
});
app.get("/contact",(req,res)=>{
    res.render('contact',{name:"Contact"});
});


//Routes

const newsRoute = require("./src/route/news");

app.use("/news", newsRoute);
app.use("/article", newsRoute);
  
app.use("*", (req, res)=>{
    res.end("404")
})

app.listen(3000, (ip, port)=>{
    console.log(`Server is running on http://127.0.0.1:3000/`)
});
