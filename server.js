const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

app.use(express.urlencoded({extends: false}));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.status(200);
    res.render("index.html")
});

app.listen(PORT, (error)=> {
    if(!error){
        console.log("Server is running smoothly on port: " + PORT);
    } else{
        console.log("something went wrong with server");
    }
});