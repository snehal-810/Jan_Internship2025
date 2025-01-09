// ## Equality Operators: '==' & '==='

// '===' --> Strict Equality Opearator --> It doesnot perform Type Coercion --> only return TRUE when both values are exactly same
// e.g. '18' === 18 --> false

// '==' --> Loose Equality Operator --> It does perform Type Coercion
// e.g. '18' == 18 // true

const favourite = prompt(`What's your favourite number ?`)
console.log(favourite);
console.log(typeof favourite);

if(favourite === 23)
    console.log(`Cool! 23 ia amazing number!`);

if(favourite == 23) {
    console.log(`Cool! 23 is amazing number!`);
}