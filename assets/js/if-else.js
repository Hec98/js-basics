let a = 10;

if ( a >= 10 ) console.log('A >= 10');
else console.log('A < 10');

const today = new Date(); // {}
let day = today.getDay();
console.log({ day })


const week = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];
console.log(`Today is ${week[day]}`)

const week2 = {
  0: 'Sunday',
  1: 'Monday',
  2: 'Tuesday',
  3: 'Wednesday',
  4: 'Thursday',
  5: 'Friday',
  6: 'Saturday',
};

console.log(`Today is ${week2[day]}`);

if (day === 0) console.log(`Today is ${week[day]}`)
else if (day === 1) console.log(`Today is ${week[day]}`)
else if (day == '2') console.log(`Today is ${week[day]}`)
else if (day === 3) console.log(`Today is ${week[day]}`)
else if (day === 4) console.log(`Today is ${week[day]}`)
else if (day === 5) console.log(`Today is ${week[day]}`)
else console.log(`Today is ${week[day]}`)

