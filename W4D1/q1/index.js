/* eslint-disable prettier/prettier */
const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');

const PORT = process.env.PORT || 3000;

const app = express();
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));

app.get('/', (req, res) => {
      console.log(req.cookies);
      const cookieList = Object.entries(req.cookies);
      res.render('index', { cookieList });
});

app.post('/add-cookie', (req, res) => {
      res.cookie(req.body.key, req.body.value);
      res.redirect('/');
});

app.get('/destroy-cookie/:key', (req, res) => {
      const { key } = req.params;
      res.clearCookie(key);
      res.redirect('/');
});

app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
});
