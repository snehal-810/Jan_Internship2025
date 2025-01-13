// ## Functions: -
//   The fundamental building block of real world JS applications are "Functions".
//    Function is a piece of code that we can use over and over again. It's like a variable with chunks of code.;

function logger () {
    console.log(`My name is Snehal`);
}

// Callin Function/ Invoking Function/ Running Function
logger();
logger();
logger();

// We can pass data to function(Function Arguments) and function can also return some data.

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const appleJuice = fruitProcessor(5,0);
console.log(appleJuice);
console.log(fruitProcessor(5,0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

// Functions allows us to write more maintainable code. With functions we can create reusable chunks of code.

// Principle --> "Don't Repeat Code (Dry Code)"