const bodyParser = require("body-parser")
const express = require("express")
const morgan = require("morgan")
const path = require("path")
const app = express()
const server = require("http").createServer(app)
//const io = require('socket.io')(server)

app.use("/dist", express.static(__dirname + "/dist"))
app.use("/assets", express.static(__dirname + "/src/assets"))
app.use(bodyParser.json())
app.use(morgan("dev"))

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html")
})

// THESE MUST BE LAST MIDDLEWARES
app.use(function(req, res) {
    res.status(404).send({ error: "NOT_FOUND" })
})

app.use(function(err, req, res, next) {
    console.log(err)
    res.status(500).send({ error: "INTERNAL_SERVER_ERROR" })
})

server.listen(3000, () => {
    console.log("Server started")
})
