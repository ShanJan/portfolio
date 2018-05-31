var express = require("express"),
    app     = express();
    

//App config
app.set("view engine", "ejs");
app.use(express.static("public"));


//routes
app.get("/", function(req, res) {
    res.render("home");
});

app.get("/colorgame", function(req, res){
    res.render("colorGame");
});

app.get("/patatapclone", function(req, res){
    res.render("circles");
});

app.get("/todos", function(req, res){
    res.render("todos");
});


//server
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("SERVER IS RUNNING");
});