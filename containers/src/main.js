const bodyParser = require('body-parser')
const morgan = require('morgan')
const express = require('express')
const cors = require('cors')
const { exec } = require('child_process');

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

app.post("/run", (req,res) => {
    // add validation for command
    console.log(req.body)
    const command = req.body.command

    exec(command, (err, stdout, stderr) => {
      if (err) {
        console.error(err)
        return res.send(stderr)
      }
      res.send(stdout)
    })
})


const port = process.env.PORT || 5000 

app.listen(port, () => {
    console.log("listening on " + port)
})