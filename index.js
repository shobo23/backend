const solve = require("./modules/maths"); // we exported modules from our math file
const ExportedInfo = require("./objects/object");



console.log(solve(5, 9, "+"));
let { name } = ExportedInfo;
console.log(name);
