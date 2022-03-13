class Person {
    name = '';
    code = ''; 
    sentence = '';

    constructor(name='Nameless', code='Without code', sentence='No sentence') {
        this.name = name;
        this.code = code;
        this.sentence = sentence;
    }
}

const spiderman = new Person('Peter Parker', 'Spiderman', `I'm your friendly neighbor Spiderman`);
const ironman = new Person('Tony Stark', 'Ironman', `I am Iron Man`);
console.log(spiderman);
console.log(ironman);
