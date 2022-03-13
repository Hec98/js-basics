class Person {
    name = '';
    code = ''; 
    sentence = '';
    food = '';

    constructor(name='Nameless', code='Without code', sentence='No sentence') {
        this.name = name;
        this.code = code;
        this.sentence = sentence;
    }

    /**
     * @param {string} food
     */
    set setFavoriteFood(food) {
        this.food = food.toUpperCase();
    }

    get getFavoriteFood() {
        return `${this.name} favorite food is ${this.food}`;
    }

    whoIAm() {
        console.log(`I am ${this.name} and my identity is ${this.code}`);
    }

    mySentence() {
        this.whoIAm
        console.log(`${this.code} says ${this.sentence}`)
    }
}

const spiderman = new Person('Peter Parker', 'Spiderman', `I'm your friendly neighbor Spiderman`);
const ironman = new Person('Tony Stark', 'Ironman', `I am Iron Man`);
console.log(spiderman);
console.log(ironman);

spiderman.mySentence();
ironman.whoIAm();
ironman.mySentence();

spiderman.setFavoriteFood = `Aunt May's Cherry Pie`;

console.log(spiderman);
console.log(spiderman.getFavoriteFood);

