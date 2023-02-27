const express = require("express");
const bodyParser = require("body-parser");
const date=require(__dirname+"/date.js");

const app = express();

const items=["Buy food","Coock food","Eat food"];

const workitems=[];

app.set('view engine', "ejs");

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));

app.get("/", function (req, res) {

    const day =date.getDate();
    res.render("list", { ListTitle: day,newlistitems: items });
});
app.post("/",function(req,res){
    const item=req.body.n1;
    if(req.body.list==="Work"){
        workitems.push(item);
        res.redirect("/work")
    }else{
        items.push(item);
        res.redirect("/");
    }
     
     
});

app.get("/work",function(req,res){
    res.render("list",{ListTitle: "Work list",newlistitems:workitems});
});
app.get("/about",function(req,res){
    res.render("about");
});
app.listen(3000, function () {
    console.log("Server started on port 3000");
});