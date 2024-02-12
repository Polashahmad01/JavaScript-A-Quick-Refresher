const person = {
  name: 'Polash',
  age: 24,
  greet() {
    console.log('Hi I am ' + this.name);
  }
}

// console.log(person);
console.log(person.greet());