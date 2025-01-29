let MyInfo = {
  Name: "Shobo",
  age: 16,
  stack: "Fullstack",
  nationality: "Nigerian",
  friends: ["Ayo", "Bolu", "Ife"],
};

const { stack } = MyInfo;
console.log(stack);

let name = MyInfo.Name;
console.log(name);

// extract key
console.log(Object.keys(MyInfo));

// extract value
console.log(Object.values(MyInfo));

module.exports = MyInfo;
