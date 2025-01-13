// ## Arrow Function:->
//  It is a special form of Function Expression that are shorter and therfore faster to write.

// Function Expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

// Arrow Function

const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

// Q. How many years left until retirement for a person?

// const yearsUntilRetirement = birthYear => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     return retirement;
// }

// console.log(yearsUntilRetirement(1991));

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years.`;
}
console.log(yearsUntilRetirement(1991, 'Bob'))