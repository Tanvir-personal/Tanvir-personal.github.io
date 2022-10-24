/* eslint-disable prefer-destructuring */
/* eslint-disable prettier/prettier */
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;
const items = [];

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
      // res.sendFile(`${__dirname}/index.html`);
      let list = '';
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < items.length; i++) {
            list += `<li>${items[i]}</li>`;
      }
      res.send(`<!DOCTYPE html>
      <html lang="en">
      <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
      </head>
      <body>
            <h2>Express List</h2>
      
            <ul>
                  ${list}
            </ul> 
            <br />
            <a href="/add"> Add </a>
      </body>
      </html>`);
});

app.get('/add', (req, res) => {
      res.send(`<form action="/add" method="POST">
                  <label for="item">item:</label><br>
                  <input type="text" id="item" name="item"><br><br>
                  <input type="submit" value="Submit">
            </form>`);
});

app.post('/add', (res, req) => {
      items.push(req.body.item);
      res.redirect('/');
});

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
