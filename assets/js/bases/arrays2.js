let games = ['Zelda', 'Mario', 'Metroid', 'Chono'];
console.log(`Length: ${games.length}`);

let one = games[0];
let latest = games[games.length - 1];

console.log(`One: ${one} and latest: ${latest}`);

games.forEach((element, index, array) => {
  console.log({element, index, array})
});

let newLength = games.push('F-Zero');
console.log({newLength, games});

newLength = games.unshift('Super Mario');
console.log({newLength, games});

let deleteGame = games.pop()
console.log({deleteGame, games});

let deleteGames = games.splice(1, 2);
console.log({deleteGames, games});

let metroidIndex = games.indexOf('Metroid');
console.log({metroidIndex})
