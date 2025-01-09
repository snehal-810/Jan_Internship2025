// ** Type Conversion **
//    Manually Converting type from One type to Another type --> explicitly

// ** Type Coercion **
//    JS automatically converts types behind the scene for us --> implicitly

const inputYear = '1994';
console.log(inputYear + 18);

console.log(inputYear);
console.log(Number(inputYear), inputYear);

console.log(Number(inputYear) + 18);

console.log(Number('Nilesh'));

console.log(typeof NaN);

console.log(String(23), 23);

// Note --> JS can only converts in 3 types : 1. to Number, 2. to String, 3. to Boolean
// Boolean conversion behaves differently(truthy and falsy)

// ## Type Coersion ##
//      Type coercion happens whenever an operator is dealing with two values that has different types,
//      Then JS works behind the scenes to convert one of the values to match with other value.

console.log('I am ' + 23 + 'years old');

console.log('23' - '10' - 3);

console.log('23' + '10' + '3');

console.log('23' * '2');
console.log('23' / '2');

// Guess the output:
// let n = '1' + 1;
// n = n - 1;
// console.log(n);

// let p = 2 + 3 + 4 + '5';
// console.log(p);

// let a = '10' - '4' - '3' - 2 + '5';
// console.log(a);