const hec = {
    name: 'Héctor',
    age: 23, 
    printName() {
        console.log(`Name: ${this.name} Age: ${this.age}`);
    }
}

const juan = {
    name: 'Juan',
    age: 23, 
    printName() {
        console.log(`Name: ${this.name} Age: ${this.age}`);
    }
}

// This has to work with the word "new"
function Person(name, age) {
    console.log('Print this line');
    this.name = name;
    this.age = age;
    
    this.printName = () => console.log(`Name: ${this.name} Age: ${this.age}`);
}

const maria = new Person('Maria', 18);
const ale = new Person('Ale', 23);

// console.log(maria)

maria.printName();
ale.printName();