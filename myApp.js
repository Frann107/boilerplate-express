require('dotenv').config();
let express = require('express');
let app = express();

console.log(process.env.MESSAGE_STYLE);

/// #1
//console.log("Hello World")

///#2
///app.get("/", (req,res) => {
///res.send("Hello Express")
///})

//#4 
app.use("/public", express.static(__dirname + "/public"));

//#3
app.get("/", (reg,res) => {
res.sendFile(__dirname + "/views/index.html"); 
})

//#5 
//app.get("/json", (req, res) => {
//res.json ({"message": "Hello json"})
//})

//#6
app.get("/json", function(req, res) {
    console.log(process.env.MESSAGE_STYLE <= "message style")
    if (process.env.MESSAGE_STYLE === "uppercase") {
        res.json(
           { "message": "HELLO JSON"}
        )
    } else {
        res.json({
            "message": "Hello jason"
        })
    }
});




































 module.exports = app;
