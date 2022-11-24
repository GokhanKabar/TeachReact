const express = require('express')
const app = express()

const data = require("./data.json")

app.get("/api", (req,res) => {
    res.json(data)
})


app.listen(5000, ()=> {console.log("Server started on port 5000")})