const express = require('express');
const app = express();
const PORT = 5000;
app.use('/public', express.static('public'))
app.use(express.static('img'));
app.set('view engine', 'ejs');

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}!`);
});


app.get('/', function(req, res){
    res.render('main.ejs')
});


app.get('/login', (req,res) => {
    res.render('login.ejs');
});

app.get('/mypage', (req,res) => {
    res.render('mypage.ejs');
});