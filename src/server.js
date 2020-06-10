const express = require ("express");
const server = express();

server.use(express.static("public"));

server.get("/",(req,res) => {
    res.render("index.html")
})


server.listen(5000);
