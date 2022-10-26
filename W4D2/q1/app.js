const path = require('path');
const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use('/js', express.static(path.join(__dirname, 'views', 'js')));

const PORT = process.env.PORT || 3000;

const list = {};

app.get('/', (req, res) => {
    res.render('form');
});

app.post('/add', (req, res) => {
    console.log(req.body);
    list[`${req.body.fname} ${req.body.lname}`] = { ...req.body };
    console.log(list);
    res.status(200);
    res.end();
});

app.get('/list', (req, res) => {
    res.render('list', { list });
});

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
