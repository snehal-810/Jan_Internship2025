const firstName = "Nilesh"
const job = "teacher";
const birthYear = 1991;
const year = 2037;

// const nilesh = "I'm " + firstName + ", a " + (year - birthYear) + ' years old ' + job + ' !'; 
const nilesh = "I'm " + firstName + " ,a " + (year - birthYear) + ' years old ' + job + ' !';
console.log(nilesh);

// Using Template Literals
//const newNilesh = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
const newNilesh = `I'm ${firstName}, a ${year - birthYear} years old ${job}! `
console.log(newNilesh);

// Regular String
console.log(`Just a regular string ...`)

// Multiline String(Before ES6)
console.log("String with \n\
    multiple \n\
    lines");

// (After ES6)
console.log(`String with
    multiple
    lines`);