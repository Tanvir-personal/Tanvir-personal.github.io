/* eslint-disable prefer-destructuring */
/* eslint-disable prettier/prettier */
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));

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
      res.send(`Your name: ${name} and age: ${age}`);
});

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
