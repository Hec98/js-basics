let character = {
  name: 'Tony Stark',
  codeName: 'Ironman',
  alive: false,
  age: 40,
  coords: {
    lat: 34.043,
    lng: -118.70
  },
  suits: ['Mark 1', 'Mark V', 'Hulkbuster'],
  direction: {
    zip: '10880, 90265',
    location: 'Maliu, California'
  },
  'last-movie': 'End game'
};

console.log(character);
console.log(`Name: ${character.name}`);
console.log(`Name: ${character['name']}`);
console.log(`Age: ${character.age}`);
console.log(`Coords: ${character.coords.lat}, ${character.coords.lng}`);
console.log(`No Suits: ${character.suits.length}`);
console.log(`Last suit: ${character.suits[character.suits.length - 1]}`);

const x = 'alive';
console.log(`Alive: ${character[x]}`)

console.log(`Last movie: ${character['last-movie']}`)

// More details

delete character.age;

console.log(character);

character.married = true;

const entriesPairs = Object.entries(character);
console.log(entriesPairs);

Object.freeze(character);

character.money = 1000000;
character.married = false;

console.log(character);

const properties = Object.getOwnPropertyNames(character)
const values = Object.values(character)
console.log(properties, values)
