const hobbies = ["Sports", "Cooking"];

const coppiedArray = hobbies.slice();
console.log(coppiedArray1);
const coppedArray1 = [...hobbies]
console.log(coppedArray1);

const person = {
  nam: "John",
  age: 22
}

const coppiedPerson = { ...person }
console.log(coppiedPerson);

const toArray = (...args) => {
  return args;
}

console.log(toArray(2, 35, 64))