// Synchronous
console.log("start");
console.log("middle");
console.log("end");

// Asynchronous
setTimeout(() => {
    console.log("Wassup");
    
}, 5000)

// where 1000 = 1s
setInterval(() => {
    console.log("Yoo");
}, 1000)