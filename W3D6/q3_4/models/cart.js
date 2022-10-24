/* eslint-disable prefer-destructuring */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable padded-blocks */
/* eslint-disable no-empty */
/* eslint-disable space-in-parens */
/* eslint-disable max-len */
/* eslint-disable no-trailing-spaces */
/* eslint-disable space-before-blocks */
/* eslint-disable prettier/prettier */
let cart = null;
class Cart{
      static save(product){
            if (cart === null){
                  cart = { products: [], totalPrice: 0 };
            }
            console.log(product[0].id);
            // eslint-disable-next-line arrow-parens
            const existingProductIndex = cart.products.findIndex(p => p.id === +product[0].id);
            if (existingProductIndex < 0){
                  product[0].quantity = 1;
                  cart.products.push(product[0]);
            } else {
                  cart.products[existingProductIndex].quantity++;
            }
            cart.totalPrice += product[0].price;
      }

      static getCart(){
            return cart;
      }
}

module.exports = Cart;
