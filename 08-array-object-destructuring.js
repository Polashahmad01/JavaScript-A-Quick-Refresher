const person = {
  name: 'Polash',
  age: 24,
  greet() {
    console.log('Hi I am ' + this.name);
  }
}

const { name, age } = person;

console.log(name, age);

const hobbies = ['Sports', 'Cooking'];

const [hobbyOne, hobbyTwo] = hobbies;
console.log(hobbyOne, hobbyTwo);