const heroes = ['Batman', 'Flash', 'Arrow', 'Superman'];

console.log('for traditional');
for(let i = 0; i < heroes.length; i++) console.log(heroes[i]);

console.log('for in');
for(let i in heroes) console.log(heroes[i])

console.log('for of')
for(let hero of heroes) console.log(hero);
