//variables using class names

const cartBtn = document.querySelector(".cart-btn");
const closeCartBtn = document.querySelector('.close-cart');
const clearCartBtn = document.querySelector('.clear-btn');
const cartDOM = document.querySelector('.cart');
const cartOverlay = document.querySelector('.cart-overlay');
const cartItem = document.querySelector('.cart-items');
const cartTotal = document.querySelector('.cart-total');
const cartContent = document.querySelector('.cart-content');
const productDOM = document.querySelector(".products-center");

//cart
let cart = [];

/**
 * set up classes
 * put in methods
 */

//class for getting all the products from products.json
class Products{

    //set up a method
    //es6 feature: async - await that returns a promise
    async getProducts() {
        try {
            let result = await fetch("products.json");
            let data = await result.json();
            return data;
        } catch (error) {
            console.log(error);
        }
        
    }


}

//class for displaying products - it gets all products from the Product class and display them
class UI{

}

//local Storage
class Storage{

}


//set up the event listener for where we'll kick up things
document.addEventListener("DOMContentLoaded", () => { //arrow fn syntax
//where to call our fns (create instances of the Products and UI classes)
    
    const ui = new UI();
    const products = new Products();

    //get all products
    products.getProducts().then(data => console.log(data)); 

})








