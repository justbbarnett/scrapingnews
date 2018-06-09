var axios = require('axios');
var bodyParser = require('body-parser');
var cheerio = require('cheerio');
var exphbs = require('express-handlebars');
var express = require('express');
var moment = require('moment');
var mongoose = require('mongoose');

var db = require('./models');
const PORT = process.env.PORT || 8080;

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/scrapingnews";

mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI)
// mongoose.connect(MONGODB_URI);

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require('./routes/scraping.js')(app);
require('./routes/html-routes.js')(app);
require('./routes/saving.js')(app);
require('./routes/note-routes.js')(app);


app.listen(PORT, () => console.log('App running on port ' + PORT))