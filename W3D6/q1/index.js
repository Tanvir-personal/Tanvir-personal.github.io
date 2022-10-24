/* eslint-disable prettier/prettier */
const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));
app.use('/css', express.static(path.join(__dirname, 'css')));

app.get('/', (req, res) => {
      const date = new Date();
      const hour = date.getHours();
      console.log(hour);
      const cssFile = (hour >= 6 && hour <= 17) ? 'css/day.css' : 'css/night.css';
      const time = (hour >= 6 && hour <= 17) ? 'day' : 'night';
      res.render('index', { cssFile, time });
});

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
