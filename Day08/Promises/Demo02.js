// ## Handling Error

// --> We can handle callback errors by supplying error argument like this: 

function loadScript(src, callback) {
    var script = document.createElement("script");
    script.src = src;
    script.onload = function () {
        console.log("Loaded script with SRC: "+ src);
        callback(null, src);
    }
    script.onerror = function() {
        console.log("Error loading script with SRC: " + src);
        callback(new Error("src got some error"));
    }
    document.body.appendChild(script);
}

function hello(error, src) {
    if(error) {
        console.log(error);
        sendTomessageToCEO();
        return;
    }
    alert("Hello World!" + src);
}

function goodmorning(error, src) {
    if(error) {
        console.log(error);
        return;
    }
    alert("Good Morning!" + src);
}

loadScript("https://cdndf.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js", hello);