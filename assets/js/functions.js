function hello(name) {
  console.log(`Hello ${name}`);
  console.log(arguments)
}

const hello2 = function(name) {
  console.log('Hello ' +  name);
}

const helloArrow = () => {
  console.log('Hello =>')
}

const helloArrow2 = (name) => {
  console.log(`Hello => ${name}`)
  return [name, true]
}

hello('Héctor', 23, false);
hello2('Juan');

helloArrow();
const helloArrow2R = helloArrow2('Martha');
console.log(helloArrow2R[0])

const addO = (a, b) => a + b;
console.log(addO(5, 5));

const getRandom = () => Math.random();
console.log(getRandom())
