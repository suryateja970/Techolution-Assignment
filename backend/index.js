const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const user = require('./routes/user')
const cors=require("cors")
dotenv.config({
    path: './config/config.env'
})

const PORT = process.env.PORT || 3000

const app = express()
app.use(express.json())
app.use(bodyParser.json())
app.use(cors())
app.get('/', (req, res) => {
    res.send("Hello From Server")
})
app.use('/user', user)

mongoose.connect(process.env.DB_URL, {
    useCreateIndex: true,
    useFindAndModify: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (success, err) => {
    try {
        console.log(`MongoDb connected successfully`)
    } catch (err) {
        console.log(`An exception raised unable to connect to db`)
    }
})

app.listen(PORT, (success, err) => {
    try {
        console.log(`server is running on port ${process.env.PORT}`)
    } catch (err) {
        console.log(`Unable to connect to server`)
    }
})