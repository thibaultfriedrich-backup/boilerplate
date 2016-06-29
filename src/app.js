var express = require('express');
var morgan = require('morgan');
var swig = require('swig');

var app = express();

app
//.use(morgan('combined'))
.engine('html', swig.renderFile)
.set('view cache', false)
.set('view engine', 'html')
.set('views', __dirname+'/../views/templates')
.get('/', function (req, res) {
    res.render('index.html', {title: 'ok'});
})
.use(express.static(__dirname+'/../views/static'))
.use(express.static('bower_components',__dirname+'/../views/bower_components'))
.use(express.static('partials',__dirname+'/../views/partials'));

var port = process.env.PORT || 8080;

var server = app.listen(port, function (req, res) {
    console.log('listening on http://localhost:'+server.address().port);
});

