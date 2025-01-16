// ## Introduction To Promises ##

// --> Promise of code execution

// --> The solution to the callback hell is promises.
// --> A promise is a "promise of code execution" .
// --> The code either executes or fails, in both the cases the subscribers will be notified.

// --> The syantax of a promise looks like this: 

// let promise = new Promise(function (resolve, reject) {
//     // lines of execution
// });

// --> resolve and reject are two callbacks provided by JavaScript itself. They are called like this: 
// resolve(value) --> If the job is finished successfully
// reject(error) --> If the job fails.

let promise = new Promise(function(resolve, reject) {
    alert("Hello");
    resolve(56);
});
console.log("Hello one");
setTimeout(function () {
    console.log("Hello Two in 2 seconds");
}, 2000);
console.log("My name is " + "Hello Three");

console.log(promise);

// --> The promise object returned by the new Promise constructor has two properties:

// 1. state --> Initially pending, then changes to either "fullfilled" when resolve is called or "rejected" when reject is called

// 2. result --> Initially undefined, then changes to values if resolved(resolve(values)) or error when rejected(reject(error))