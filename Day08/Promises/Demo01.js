// ## Introduction To Callbacks ##

// --> Synchronous actions are the actions that initiate and finish one-by-one.
// let a = prompt("What is your name?");
// let b = prompt("What is your age?");
// let c = prompt("What is your favorite color?");

// console.log(`${a} is ${b} years old and has ${c} favorite color. `);

// --> Asynchronous actions are the actions that we initiate now and they finish later. e.g. setTimeout()

// console.log("Start");
// setTimeout(function() {
//     console.log("Hey I am good.");
// }, 3000
// );
// console.log('End');

// --> A callback function is a function passed into another function as an argument which is then invoked inside the outer function to complete an action.

function loadScript(src, callback) {
    var script = document.createElement("script");
    script.src = src;
    script.onload = function() {
        console.log("Loaded script with SRC: "+ src);
        callback(src);
    }
    document.body.appendChild(script);
}

function hello(src) {
    alert("Hello World!" + src);
}

function goodmorning(src) {
    alert("good morning" + src);
}

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js", hello);