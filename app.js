var express = require("express");
var app = express();

app.use(express.static("public"))

app.get("/", function(req, res){
    res.render("ColorGame.html");
})

app.listen(process.env.PORT || 3000, () => console.log("Server is running......"));