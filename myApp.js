require('dotenv').config();
let express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
let app = express();
let bodyParser = require("body-parser")

//#1 
console.log("Hello World")

//#2 
app.get("/", (req, res) => {
res.send(" Hello Express")
})

// #7
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});

console.log(process.env.MESSAGE_STYLE);

// #4
app.use("/public", express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({ extended: false}))

// #3
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

// #6
app.get("/json", (req, res) => {
  if (process.env.MESSAGE_STYLE === "uppercase") {
    res.json({ "message": "HELLO JSON" });
  } else {
    res.json({ "message": "Hello json" });
  }
});

//#8
app.get("/now", (req, res, next) => {
    req.time = new Date().toString();
    next();
}, (req, res) => {
    res.json({"time": req.time})
})

//#9 
app.get("/:word/echo", (req, res) => {
  const word = req.params.word;
  res.json({ echo: word });
});

//#10 
app.get("/name", (req, res) => {
  res.json({ name: req.query.first + " " + req.query.last })
})

//#12
app.post("/name", (req, res) => {
  res.json({ name: req.body.first + " "+ req.body.last });
});






























 module.exports = app;
