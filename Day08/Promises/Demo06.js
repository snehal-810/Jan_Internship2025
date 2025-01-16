// ## Promise Chaining ##

// --> We can chain promises and make them pass the resolved values to one another.
// --> The idea is to pass the result through the chain of .then() handlers.

// --> Flow of execution: -
//   1. The initial promise resoloves in 1 second(Assumption).
//   2. The next .then() handlers is then called, which returns a new promise(resolved with 2 values).
//   3. The next .then() gets the result of previous one and this keeps on going.

// --> Every call to .then() returns a new promise whose value is passed to the next one 
// //     and so on. 

// let p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//             console.log("Resolved after 2 seconds")
//             resolve(56)
//     }, 2000)
// })

// p1.then((value) => {
//     console.log(value)
//     return new Promise((resolve, reject) => {
//             setTimeout(() => { resolve("Promise 2") }, 2000)
//     }) 
// }).then((value) => {
//     console.log("We are done")
//     return 2
// }).then((value)=>{
//     console.log("Now we are pakka done")
// })

const loadScript = (src) => {
    return new Promise((resolve, reject) => {
            let script = document.createElement("script")
            script.type = "text/javascript"
            script.src = src
            document.body.appendChild(script)
            script.onload = (script) => {
                    resolve("Script has been loaded sir")
            }
            script.onerror = () => { reject(0) }
    })
}

let p1 = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js")
p1.then((value) => {
    console.log(value)
    return loadScript("https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js")
}).then((value) => {
    console.log("Second script ready")
}).catch((error) => {
    console.log("We are sorry but we are having problems loading this script")
})
