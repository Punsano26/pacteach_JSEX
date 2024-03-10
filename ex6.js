class Product {
    id = "";
    name = "";
    price = 0.0;
    quantityAvailable = 0;
    constructor(id, name, price, quantityAvailable) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantityAvailable = quantityAvailable;
    }
    getID() {
        return this.id;
    }
   getName() {
        return this.name;
   }
   getprice() {
    return this.price;
   }
   getQuantityAvailable() {
    return this.quantityAvailable;
   }
   updateQuantityAvailable(quantityAvailable) {
    this.quantityAvailable = quantityAvailable;
   }
   toString() {
    return `Product [id = ${this.getID()},
            name = ${this.name},
            price = ${this.getprice()},
            quantity = ${this.quantityAvailable}]`;
   }
}

class ShoppingCart {
    item = []; 
    addItem(item) {
        this.item.push(item);
    }

    removeItem(productId) {
        this.item = this.item.filter(item => item.getID() !== productId);
    }
    getTotalPrice() {
        return this.item.reduce((total, item) => total + item.getprice(), 0)
    }
}

class Customer {
    id = "";
    name = "";
    email = "";
    address = "";
    shoppingCart = new ShoppingCart()
    constructor(id, name, email, address) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.adderss = address;
    }
    getID() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getEmail() {
        return this.email;
    }
    getAddress() {
        return this.adderss;
    }
    getShoppingCart() {
        return this.shoppingCart;
    }
    addToShoppingCart(product) {
       this.shoppingCart.addItem(product);
    }
    removeFromShoppingCart(productID) {
       this.shoppingCart.removeItem(productID);
    }
    checkout(){
        return `Customer [id = ${this.getID()},
                name = ${this.name},
                email = ${this.email}.
                address = ${this.adderss}
                checkout = ${this.shoppingCart.getTotalPrice}]`;
    }
}

const main = () => {
    const product1 = new Product ("P01", "ปลากระแป๋ง", 25, 2);
    const customer1 = new Customer ("C01", "vick", "vc@gmail.com", "NPRU");

    customer1.addToShoppingCart(product1);

    console.log(product1.toString());
    console.log("----------------------------")
    console.log(customer1.checkout());
}
main();