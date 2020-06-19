const bodyParser = require('body-parser')
const morgan = require('morgan')
const express = require('express')
const cors = require('cors')


const app = express()

app.use(
    bodyParser.urlencoded({extended:true}),
    bodyParser.json(),
    morgan(),
    cors()

)

app.get("/", (req,res) => {

    console.log("req hit")
    res.send("ayo this the message dawg")
})

const port = process.env.PORT || 5000 

app.listen(port, () => {
    console.log("listening on " + port)
})