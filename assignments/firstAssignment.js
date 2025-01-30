// Assignment: Working with Array Methods and Loops
// 1. For Loop & Reduce (Combination)
// You have an array of student scores:
const scores = [80, 95, 78, 88, 92, 67, 75, 89, 100, 55];
// Use a for loop to find the highest score in the array.
// Use reduce to find the total sum of all scores and calculate the average.
console.log("Question 1a");
let currentNum = scores[0];
for (let i = 1; i < scores.length; i++) {
  if (scores[i] > currentNum) {
    currentNum = scores[i];
  }
}
console.log(currentNum);

console.log("Question 1b");
let n = scores.length;
const calcAverage = scores.reduce((a, b) => {
  return a + b / scores.length;
}, 0);
console.log(calcAverage);

// 2. Reduce & Map (Advanced Transformation)
//  Given an array of products:
const products = [
  { name: "Laptop", price: 1500 },
  { name: "Phone", price: 700 },
  { name: "Tablet", price: 300 },
  { name: "Monitor", price: 400 },
];
//  Use reduce to calculate the total cost of all products.
//  Use map to create a new array that adds a "discountedPrice" field to each
// product, where the discount is 10% off the original price.

console.log("Question 2a");

const totalPrice = products.reduce((a, b) => {
  return a + b.price;
}, 0);
console.log(totalPrice);

console.log("Question 2b");
const discountedPrice = products.map((a, b) => {
  // return a.price*10 /100
  return {
    discountedPrice: (a.price * 10) / 100,
  };
});
console.log(discountedPrice);

// 3. ForEach & Map (String Manipulation)
//  Given an array of people's full names:
const names = ["john doe", "jane smith", "alice wonderland", "bob builder"];
// o Use map to return an array where each name is properly capitalized (e.g., "John
// Doe").
// o Use forEach to log each person's initials (e.g., "JD" for "John Doe")
console.log("Question 3a");

const capitalizeNames = names.map((a) => {
  //   return a.toUpperCase();
  return a
    .split(" ")
    .map((b) => b[0].toUpperCase() + b.slice(1))
    .join(" ");
});
console.log(capitalizeNames);

console.log("Question 3b");
const initials = names.map((a) => {
  return a
    .split(" ")
    .map((b) => b[0].toUpperCase())
    .join("");
});
console.log(initials);

// 4. Filter & Sort (Complex Filtering & Sorting)
//  Given an array of employees:
const employees = [
  { name: "Michael", age: 45, salary: 5000 },
  { name: "Sarah", age: 30, salary: 7000 },
  { name: "David", age: 25, salary: 4500 },
  { name: "Emily", age: 28, salary: 5500 },
  { name: "John", age: 35, salary: 6000 },
];
// o Use filter to get employees who earn more than 5000.
// o Use filter to get employees younger than 30.
// o Use sort to arrange employees by their salary in descending order.
console.log("Question 4a");
const highEarner = employees.filter((a) => a.salary > 5000);
console.log(highEarner);

console.log("Question 4b");
const youngEmployes = employees.filter((a) => a.age < 30);
console.log(youngEmployes);

console.log("Question 4c");
const arrangeEmployes = employees.sort((a, b) => {
  // return a.salary -b.salary
  return b.salary - a.salary;
});
console.log(arrangeEmployes);

// 5. Combination Challenge (Real-Life Example)
//  You are given a list of transactions in a bank account:
const transactions = [
  { type: "deposit", amount: 1000 },
  { type: "withdrawal", amount: 500 },
  { type: "deposit", amount: 1200 },
  { type: "withdrawal", amount: 300 },
  { type: "deposit", amount: 400 },
  { type: "withdrawal", amount: 700 },
];
// o Use reduce to find the total balance (start from 0).
// o Use filter to get all deposit transactions.
// o Use map to create a new array that includes each transaction but adds a "status"
// field that shows "completed" for deposits and "pending" for withdrawals

console.log("Question 5a");
let currentBalance = 0;
const totalBalance = transactions.reduce((a, b) => {
  if (b.type === "deposit") {
    return a + b.amount;
  } else {
    return a - b.amount;
  }
}, 0);
console.log(totalBalance);

console.log("Question 5b");
const getDeposit = transactions.filter((a) => a.type === "deposit")
console.log(getDeposit);

console.log("Question 5c");
const transactionSatus = transactions.map((a) => ({
    ...a, status: a.type === "deposit" ? "completed" : "pending"
}))
console.log(transactionSatus)