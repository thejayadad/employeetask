
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express();
const corsOptions = require('./config/corsOptions')
const cookieParser = require('cookie-parser')
require('dotenv').config();
const path = require("path")
const port = process.env.PORT || 5000;



app.use(cors(corsOptions))
app.use(express.json())
app.use('/', express.static(path.join(__dirname, '/public')))
app.use(cookieParser())
app.use("/users", require("./routes/userRoutes"));
app.use('/notes', require('./routes/noteRoutes'))



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
