// ** Falsy Values are those which are not exactly false, but will become false when we try to convert them into "Boolean".
// --> In JS, there are 5 Falsy Values : 0, undefined, null, NaN, ''

// --> Everything else is so called Truthy Values.

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Nilesh'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;
if(money) {
    console.log(`Don't spedn it all`);
} else {
    console.log(`You should get a job!`);
}

let height;
if(height) {
    console.log(`YAY! Heigh is DEFINED`);
} else {
    console.log(`Height is UNDEFINED!`)
}