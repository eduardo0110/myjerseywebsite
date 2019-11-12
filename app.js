
const estimateController = require('./controllers/estimate-controller'),
mongoose = require("mongoose");
const dotenv = require('dotenv');
mongoose.connect(process.env.MONGODB_URI || "mongodb://heroku_7nrhfz6t:pol75799cbbn8laetiahk450au@ds145358-a0.mlab.com:45358,ds145358-a1.mlab.com:45358/heroku_7nrhfz6t?replicaSet=rs-ds145358",
{useNewUrlParser : true,
useUnifiedTopology: true ,
retryWrites:false});

const db = mongoose.connection;

db.once("open",() => {
    console.log("successfully connected to mongodb using moongose!!");
});
mongoose.Promise = global.Promise
mongoose.set('useCreateIndex', true);

//EXPRESSS
var sslRedirect = require('heroku-ssl-redirect');
const express = require('express'),
app = express();

//MIDDLEWARE ON TOP OF EXPRESS
app.use(express.json());
app.use(sslRedirect());
app.set("view engine", "ejs");

app.use(express.static("public"));
app.set("port",process.env.PORT || 3000);

app.use(
    express.urlencoded({
        extended:false
    })
);
//ROUTES*******
app.get('/', (req, res) => {
    res.render('index')});

    app.get('/contact',(req , res) => {
        res.render('contact')
    });
    app.post('/contact-form',estimateController.saveEstimate);
    app.get('/services',(req , res) => {
        res.render('services')
    });
    app.get('/projects',(req , res) => {
        res.render('projects')
    });
    app.get('/thanks',(req , res) => {
        res.render('thanks')
    });
    app.get("*" , (req , res)=> {
        res.render('index')
    });
//SERVER INIT

app.listen(app.get("port") , () => {
    console.log(`Server running at http://localhost:${app.get("port")}`);
});

