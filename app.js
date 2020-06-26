var express = require("express");
var app = express();

app.use(express.static("public"))

app.get('/', (req, res) => {
    res.sendFile('./public/colorGame.html', { root: __dirname });
});

app.listen(process.env.PORT || 3000, () => console.log("Server is running......"));