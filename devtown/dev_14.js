const items = {
    food: 1000,
    drinks: 2000
};
 cart = 0;
 function addToCart(item){
    return cart+item;

 }

 function addToCart(item) {
    cart = addToCart(item);
 }

 addToCart(item.food);
 console.log(cart);
 var cart;  
