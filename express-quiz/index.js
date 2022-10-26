/* eslint-disable arrow-parens */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable prettier/prettier */
const express = require('express');
const path = require('path');
const session = require('express-session');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));

app.use(session({
      resave: false,
      saveUninitialized: false,
      secret: 'secretkey123456',
}));

const items = [];

app.get('/', (req, res) => {
      let userList = [];
      if (req.session.userList) {
            userList = req.session.userList;
      }
      console.log(userList);
      res.render('index', { items: userList });
});

app.get('/add', (req, res) => {
      res.render('add');
});

app.post('/add', (req, res) => {
      console.log(req.body.item);
      items.push(req.body.item);
      req.session.userList = items;
      res.redirect('/');
});

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
