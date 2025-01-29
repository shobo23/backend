let num = [1, 2, 3, 4];

let sum = 0;
for (let i = 0; i < num.length; i++) {
  sum += num[i];
}
// console.log(sum);

// reduce method: The reduce() method executes a reducer function on each element of the array, resulting in a single output value.
const add = num.reduce((firstElement, allElement) => {
  return firstElement + allElement;
});

// console.log(add);

const obj = [
  {
    name: "shobo",
    age: 12,
    accountBalnce: 2000000,
  },
  {
    name: "shobo",
    age: 12,
    accountBalnce: 65445,
  },
  {
    name: "shobo",
    age: 12,
    accountBalnce: 555,
  },
  {
    name: "shobo",
    age: 12,
    accountBalnce: 1,
  },
];

const addAccountBAlance = obj.reduce((a, b) => {
  return a + b.accountBalnce;
}, 0);

// console.log(addAccountBAlance);

// map():The map() method creates a new array by applying a function to each element of the original array.
const arr = ["Shobo", "Nelson", "Kelvin", "Grace"];
// console.log(
//     arr.map((i, e) => {
//         return i.toUpperCase()
//     })
// );

// froEach()
// arr.forEach((e) => {
//     console.log(e.toUpperCase());

// })

// filter(): The filter() method creates a new array with all elements that pass a test provided by a function.
const getGreaterThanTwo = num.filter((e) => e > 2);
console.log(getGreaterThanTwo);
