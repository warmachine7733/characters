const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();

//middlewares
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());

//routes
app.use("/", require("./routes/home"));

const port = process.env.PORT || 8000

app.listen(port,()=>console.log(`server is at ${port}`))