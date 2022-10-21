/* eslint-disable space-before-blocks */
/* eslint-disable eol-last */
/* eslint-disable prefer-destructuring */
/* eslint-disable prettier/prettier */
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
      let name = req.query.name;
      let age = req.query.age;
      if (!name) {
            name = 'Person';
      }
      if (!age){
            age = 'UNKNOWN';
      }
      res.send(`Welcome ${name},, your age: ${age}`);
});

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));