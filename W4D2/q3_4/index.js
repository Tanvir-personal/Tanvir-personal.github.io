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
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));
app.use(express.json());
app.use('/js', express.static(path.join(__dirname, 'view', 'js')));

const PORT = process.env.PORT || 3000;

app.use(session({
      resave: false,
      saveUninitialized: false,
      // secret: `LSD8989${Math.random().toString(20).substr(2, 6)}`,
      secret: 'secretkey',
}));

app.use((req, res, next) => {
      if (!req.session.cart) {
            req.session.cart = { products: [], totalPrice: 0 };
      }
      next();
});

app.get('/', (req, res) => {
      res.render('index', { productList, cart: req.session.cart });
      // res.render('index', { productList });
});

app.get('/details/:prodId', (req, res) => {
      const { prodId } = req.params;
      const product = productList.filter(p => p.id === +prodId);
      // console.log(prodId);
      // console.log(product);
      res.render('details', { product, cart: req.session.cart });
});

app.post('/add-to-cart', (req, res) => {
      console.log(req.body);
      const { productId } = req.body;
      const product = productList.filter(p => p.id === +productId);
      const cart = Cart.save(product);
      req.session.cart = cart;
      const cartItemCount = cart.products.map(p => p.quantity).reduce((a, b) => a + b, 0);
      // res.status(200).send(req.session.cart.products.length);
      res.status(200).send({ count: cartItemCount });
      // res.redirect('/cart');
});

app.post('/add', (req, res) => {
      console.log(req.body);
      res.status(200).send('hello post');
});

app.get('/cart', (req, res) => {
      res.render('cart', { cart: req.session.cart });
});

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
