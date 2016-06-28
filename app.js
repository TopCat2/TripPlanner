var Express = require('express');
var app = new Express();
var baseRoute = require("./routes")
var bodyParser = require('body-parser');
var morgan = require('morgan');
var swig = require('swig');
var path = require('path');
// var bootstrap = require ('/node_modules/bootstrap/dist')
// var jquery = require ('/node_modules/jquery/dist')

app.use(Express.static('./public'));



// templating boilerplate setup
app.engine('html', swig.renderFile); // how to render html templates
app.set('view engine', 'html'); // what file extension do our templates have
app.set('views', path.join(__dirname, '/views')); // where to find the views
swig.setDefaults({ cache: false });

// logging middleware
app.use(morgan('dev'));

// body parsing middleware
app.use(bodyParser.urlencoded({ extended: true })); // for HTML form submits
app.use(bodyParser.json()); // would be for AJAX requests

app.get('/', function (req, res, next){
  console.log("were here")
  next()
})
app.use('/', baseRoute())
app.use('/jquery', Express.static('./node_modules/jquery/dist'))
app.use('/bootstrap', Express.static('./node_modules/bootstrap/dist'));


// catch 404 (i.e., no route was hit) and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next("I didn't write That path yet");
});

// handle all errors (anything passed into `next()`)
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  console.error(err);
  res.send(err);
  // res.render(
  //   // ... fill in this part
  // );
});

app.listen(3000);
console.log('Listening on port 3000');

