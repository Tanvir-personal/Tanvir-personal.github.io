/* eslint-disable prefer-destructuring */
/* eslint-disable prettier/prettier */
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/css', express.static(path.join(__dirname, 'css')));

app.get('/', (req, res) => {
      const date = new Date();
      const hour = date.getHours();
      console.log(hour);
      const htmlFile = (hour >= 6 && hour <= 17) ? 'index_day.html' : 'index_night.html';
      res.sendFile(`${__dirname}/${htmlFile}`);
      // res.render('index', { title: 'index' });
});

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
