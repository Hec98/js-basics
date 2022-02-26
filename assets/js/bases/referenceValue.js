let a = 10;
let b = a;
a = 30;
console.log({a, b});

let juan = { nombre: 'Juan' };
// let ana = juan;
let ana = { ...juan }; // Spread trader to break reference
ana.nombre = 'Ana';

console.log({juan, ana})

const changeName = (person) => {
  person.name = 'Tony';
  return person;
};

let peter = { name: 'Peter' };
let tony = changeName({ ...peter });

console.log({peter, tony})

const arrayA = ['Mango', 'Manzana', 'Platano']
// const arrayB = arrayA.slice();
const arrayB = [ ...arrayA ];

arrayB.push('Piña');

console.table({ arrayA, arrayB });
