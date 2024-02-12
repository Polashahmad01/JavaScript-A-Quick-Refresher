const name = "Polash";
let age = 20;
const hasHobbies = true;

age = 24;

function summarizeUserInfo(userName, userAge, userHasHobbies) {
  return `Name is ${userName} and he is ${userAge} years old and is he has some hobbies ${userHasHobbies}`;
}

console.log(summarizeUserInfo(name, age, hasHobbies));