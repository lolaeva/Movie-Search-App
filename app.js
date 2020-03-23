var express = require('express');
var app = express();
var request = require('request');
const rp = require('request-promise');

//serve contents of public directory
app.use(express.static('public'));

//use ejs format
app.set('view engine', 'ejs');

//home directory for movie search
app.get('/', (req, res) => {
    res.render('search')
});

//API results from input form route
app.get('/results', (req, res) => {
    var query = req.query.search;
    var url = 'http://www.omdbapi.com/?s=' + query + '&apikey=thewdb'
    rp(url)
        .then((body) => {
            //console.log( `${body.language} is the best film`); // use backticks, not quotes
            var data = JSON.parse(body); // turn string into object
            res.render('results', {data: data});
        })
        .catch((err) => {
            console.log('Error!!', err);
        })
})

//all other request go to error page
app.get('*', (req, res) => {
	res.render('error')
})

app.listen(3000, function(){
    console.log('Movie has started')
})