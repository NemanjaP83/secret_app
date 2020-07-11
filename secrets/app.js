require("dotenv").config();
const express = require ('express');
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
//const ejs = require ('ejs');
const routes = require('./routes/routes');
const { User } = require('./model/User');

const app = express();

// Database connection
mongoose.connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then((result) => {
    console.log('Successfully connect to database');
}).catch((err) => {
    console.log(`Connection error: ${err}`);  
});

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', routes);


app.listen(3000, () => {
    console.log('Server listening on port 3000.');
});

