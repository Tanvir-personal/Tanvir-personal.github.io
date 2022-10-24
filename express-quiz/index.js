/* eslint-disable arrow-parens */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable prettier/prettier */
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));

const items = [];

app.get('/', (req, res) => {
      let list = '';
      // eslint-disable-next-line no-plusplus
      // for (let i = 0; i < items.length; i++) {
      //       list += `<li>${items[i]}</li>`;
      // }
      res.render('index', { items });
});

app.get('/add', (req, res) => {
      res.render('add');
});

app.post('/add', (req, res) => {
      console.log(req.body.item);
      items.push(req.body.item);
      res.redirect('/');
});

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
