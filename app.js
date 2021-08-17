const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get("/",function(req,res){
    res.render("index");
});

app.get("/about",function(req,res){
    res.render("about");
})

app.get("/contact",function(req,res){
    res.render("contact")
})


app.listen(3000, function(){
    console.log("server has started on port 3000");
});