class Animal {
    name = "";
    type = ""; //aquatic and terrestrial animals?
    Qleg = 0; //Quantity Leg
constructor(name, type, Qleg) {
    this.name = name;
    this.type = type;
    this.Qleg = Qleg;
}
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    setType(type) {
        this.type = type;
    }
    setQleg(Qleg) {
        this.Qleg = Qleg;
    }
    toString() {
        return `Animal [name = ${this.name},
                type = ${this.type},
                Qleg = ${this.Qleg}]`;
    }
}

class Dog extends Animal{
    nameTag = "";
    friendly = true;
    constructor(nameTag,friendly = true, name, type, Qleg ){
        super(name, type, Qleg)
        this.nameTag = nameTag;
        this.friendly = friendly;
    }
    getNameTag(){
        return this.nameTag;
    }
    setNameTag(nameTag){
        this.nameTag = nameTag;
    }
    isFriendly() {
        return this.friendly;
    }
    setFriendly(friendly) {
        this.friendly = friendly;
    }
    toString() {
        return `Dog [${super.toString()},
                nameTag = ${this.nameTag},
                friendly = ${this.friendly}]`;
    }
}

class Shark extends Animal{
    fierce = true;
    constructor(fierce = true, name, type, Qleg ){
        super(name, type, Qleg)
        this.fierce = fierce;
    }
    isFierce() {
        return this.fierce;
    }
    setFierce(fierce) {
        this.fierce = fierce;
    }
    toString() {
        return `Shark [${super.toString()},
                fierce = ${this.fierce}]`;
    }
}

const main =() =>{
    const dog1 = new Dog ("Dogy", true, "Dog", "Terrestrial", 4);
    const dog2 = new Dog ("Doby", true, "Dog", "Terrestrial", 4);
    const shark1 = new Shark (true, "Shark", "Aquaic", 0);

    console.log(dog2.toString());
    console.log("---------------------------------------");
    console.log(shark1.toString());
}
main();