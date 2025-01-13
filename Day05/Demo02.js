// ## Function Declaration VS. Function Expression

// Function Declaration

function calcAge1(birthYear) {
    // const age = 2037 - birthYear;
    // return age;

    return 2037 - birthYear;
}

//const age1 = calcAge1(1991);
console.log(age1);

// Function Expression: -> Function Without name which is also called as "Anonymous Function".
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);
console.log(age2);


// The difference between Function Declaration and Function Expression is that: 
// We can call/invoke function before function defination in case of Function Declaration.
// But, this will not work in case of function expression.