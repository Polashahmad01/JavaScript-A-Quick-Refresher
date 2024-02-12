const name = "Polash";
const age = 20;
const hasHobbies = true;

const summarizeUserInfo = (userName, userAge, userHasHobbies) => {
  return `Name is ${userName} and he is ${userAge} years old and is he has some hobbies ${userHasHobbies}`;
}

const add = (a, b) => {
  return a + b;
}

const addShortCut = (a, b) => a + b;

const addOne = num => num + 1;

const staticFunction = () => 10 + 20;

console.log(summarizeUserInfo(name, age, hasHobbies));
console.log(add(10, 10));
console.log(addShortCut(20, 30));
console.log(addOne(10));
console.log(staticFunction())