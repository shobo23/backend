const Math = (a, b, sign) => {
    if (sign === "+") {
        return a + b;
    } else if (sign === "-") {
        return a - b
    } else if (sign === "/") {
        return a / b
    } else if (sign === "*") {
        return a * b
    } else {
        return"input a mathematical sign!";   
    }
}


module.exports = Math