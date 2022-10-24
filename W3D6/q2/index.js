/* eslint-disable prefer-destructuring */
/* eslint-disable prettier/prettier */
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));

app.get('/', (req, res) => {
      res.render('index');
});

app.post('/result', (req, res) => {
      let name = req.body.name;
      let age = req.body.age;
      if (!name) {
            name = 'Person';
      }
      if (!age) {
            age = 'UNKNOWN';
      }
      res.render('output', { data: { name, age } });
});

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
