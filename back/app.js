
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express();

const path = require("path")

app.use(cors())
app.use(express.json())
app.use('/', express.static(path.join(__dirname, '/public')))


require('dotenv').config();

const uri = process.env.ATLAS_URI;
mongoose.set('strictQuery', false);
mongoose.connect(uri, { useNewUrlParser: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB Connected");
})


app.listen(5000, () => {
    console.log("App Listening")
})
