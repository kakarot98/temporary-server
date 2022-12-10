const express = require('express')
const app = express();
const cors = require("cors")
app.use(cors())
app.use(express.json())

const PORT = 9000

const bodyParser = require("body-parser");
app.use(bodyParser.json())

//default route
app.get("/", async (request, response) => {
    const res = await fetch('https://dzsqyl-8080.preview.csb.app/patient').then(res => JSON.parse(res)).catch(err => response.json({err}))
    response.json({res})
})

app.listen(PORT, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log(`listening on port ${PORT}`)
    }
})
