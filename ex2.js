class Store {
    name = "";
    location ="";
    products= "";
    constructor(name, location, products){
        this.name = name;
        this.location = location;
        this.products = products;
    }

    getName(){
        return this.name;
    }
    getLocation(){
        return this.location;
    }
    setLocation(location) {
        this.location = location;
    }
    getProducts(){
        return this.product;
    }
    setProducts(products){
        this.products = products;
    }

    toString() {
        return `Store [name = ${this.name},
                local = ${this.location},
                products = ${this.products}]`;
    }
}

class Product {
    name = "";
    price = 0;
    quantity = 0;
    constructor(name, price, quantity){
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    getName(){
        return this.name;
    }
    getPrice () {
        return this.price;
    }
    setPrice (price){
        this.product = price;
    }
    getQuantity () {
        return this.quantity;
    }
    setQuantity (quantity) {
        this.quantity = quantity;
    }

    toString() {
        return `Product [name = ${this.name},
                price = ${this.price},
                quantity = ${this.quantity}]`;
    }
}

const main = () => {
    const product1 = new Product ("ปลากระแป๋ง", 20.25, 5);

    console.log(product1.toString());
}
main();