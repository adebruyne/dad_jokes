const express = require("express");
const app = express();
const expressHbs = require('express-handlebars');
const request = require("request");

const static = express.static;

app.engine('.hbs', expressHbs({defaultLayout: 'layout', extname: '.hbs'}));
app.set('view engine', '.hbs');

app.use(static('public'));


//homepage-search for 
app.get('/',(req, res)=> {
    res.render('home', {
        message: "Who needs a pun?",
        headerText: "Dad puns are how eye roll"
    });
   
});

app.get('/puns', (req, res) => {
    var url = "http://getpuns.herokuapp.com/api/random";

    request(url, function(error, response, body){
        if(!error && response.statusCode == 200){
            var data = JSON.parse(body);
            res.render("results", {data: data});
        }
    })
})



app.listen(8887, () => {
    console.log('Your dad jokes are running at http://localhost: 8887');
})