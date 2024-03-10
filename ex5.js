class Person {
    name= "";
    age = 0;
    email = "";
    constructor(name, age,  email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
     getName(){
        return this.name;
     }
     setName(name) {
        this.name = name;
     }
     getAge() {
        return this.age;
     }
     setAge(age) {
        this.age = age;
     }
     getEmail() {
        return this.email;
     }
     setEmail(email) {
        this.email = email;
     }
     toString() {
        return `Person [name = ${this.name},
        age = ${this.age},
        email = ${this.email}]`;
     }
}

class Address {
    street = "";
    city = "";
    zipCode = "";
    constructor(street, city, zipCode){
        this.street = street;
        this.city = city;
        this.zipCode = zipCode;
    }
    getStreet() {
        return this.street;
    }
    setStreet(street) {
        this.street = street; 
    }
    getCity(){
        return this.city;
    }
    setCity(city) {
        this.city = city;
    }
    getzipCode() {
        return this.zipCode;
    }
    setzipCode(zipCode){
        this.zipCode = zipCode;
    }
    toString() {
        return `Address [street = ${this.street},
        city = ${this.city},
        zipCode = ${this.zipCode}]`;
    }
}

const main = () => {
    const person1 = new Person ("Punsan", 13, "Pusan2321@gmail.xom");
    const address1 = new Address ("Nakonban", "Bangphae city", "ziip02321");

    console.log(person1.toString());
    console.log("==----------------------------------==");
    console.log(address1.toString());
}

main();
