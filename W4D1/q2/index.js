/* eslint-disable dot-notation */
/* eslint-disable prefer-destructuring */
/* eslint-disable prettier/prettier */
const express = require('express');
const session = require('express-session');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }));

app.use(session({
      resave: false,
      saveUninitialized: false,
      secret: 'lskdjfs8098098',
}));

app.get('/', (req, res) => {
      res.sendFile(`${__dirname}/index.html`);
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
      req.session.name = name;
      req.session.age = age;
      res.redirect('/output');
});

app.get('/output', (req, res) => {
      const name = req.session.name;
      const age = req.session.age;
      res.send(`Your name: ${name} and age: ${age}`);
});

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
