const express = require("express");
const app = express();
const expressHbs = require('express-handlebars');

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
    res.send("puns");
})



app.listen(8887, () => {
    console.log('Your dad jokes are running at http://localhost: 8887');
})