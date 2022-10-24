/* eslint-disable arrow-parens */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable prettier/prettier */
const express = require('express');
const path = require('path');
const session = require('express-session');

const products = require('./models/products');
const Cart = require('./models/cart');

const productList = products.products;

const app = express();
const PORT = process.env.PORT || 3000;

app.use(session({
      resave: false,
      saveUninitialized: false,
      secret: 'lskdjflsd8989',
}));

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));

app.get('/', (req, res) => {
      // const productList = products.products;
      res.render('index', { productList });
});

app.get('/details/:prodId', (req, res) => {
      const { prodId } = req.params;
      const product = productList.filter(p => p.id === +prodId);
      console.log(prodId);
      console.log(product);
      res.render('details', { product });
});

app.post('/add-to-cart', (req, res) => {
      const { id } = req.body;
      const product = productList.filter(p => p.id === +id);
      req.session.cart = Cart.save(product);
      res.redirect('/cart');
});

app.get('/cart', (req, res) => {
      res.render('cart', { cart: req.session.cart });
});

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
