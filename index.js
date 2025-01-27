const solve = require("./maths"); // we exported modules from our math file
const ExportedInfo = require("./object");



console.log(solve(5, 9, "+"));
let { name } = ExportedInfo;
console.log(name);
