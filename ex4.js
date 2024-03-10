class SimpleCalculator {
    number1 = 0.0;
    number2 = 0.0;
    constructor(number1, number2){
        this.number1 = number1;
        this.number2 = number2;
    }
    Add() {
        return this.number1 + this.number2;
    }
    Subtract() {
        return this.number1 - this.number2;
    }
    Multiply() {
        return this.number1 * this.number2;
    }
    Divide() {
        return this.number1 % this.number2;
    }
}

const main =() => {
    const resultCalculator = new SimpleCalculator (2, 5) ;
    console.log("ผลลัพธ์การ (+) เลข:" , resultCalculator.Add());
    console.log("ผลลัพธ์การ (-) เลข", resultCalculator.Subtract());
    console.log("ผลลัพธ์การ (x) เลข", resultCalculator.Multiply());
    console.log("ผลลัพธ์การ (/) เลข", resultCalculator.Divide());
}
main();