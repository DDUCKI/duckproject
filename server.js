const express = require('express');
const app = express();
const PORT = 5000;
app.use('/public', express.static('public'))
app.use(express.static('img'));

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}!`);
});

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/main.html');
  });

app.get('/login', (req,res) => {
    res.sendFile(__dirname + '/login.html');
});