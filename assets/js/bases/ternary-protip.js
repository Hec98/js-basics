const biggerNumber = (a, b) => (a > b) ? a : b;
const haveMembership = (membership) => (membership) ? `2 dollars` : `10 dollars`;

console.log(biggerNumber(15,10));
console.log(biggerNumber(10,17));

console.log(haveMembership(true));
console.log(haveMembership(!true));

const friend = !true;
const friendsArray = [
  'Peter',
  'Tony',
  'Dr. Strange',
  friend ? 'Thor' : 'Loki',
  biggerNumber(15, 10)
]

console.log(friendsArray);

// const note = 100; // A+ A B+
const note = Math.floor(Math.random() * 100);
const degree = (note >= 93) ? 'A+' :
               (note >= 90) ? 'A' :
               (note >= 87) ? 'B+' :
               (note >= 83) ? 'B' :
               (note >= 80) ? 'B-' :
               (note >= 77) ? 'C+' :
               (note >= 73) ? 'C' :
               (note >= 70) ? 'C-' :
               (note >= 67) ? 'D+' :
               (note >= 63) ? 'D' :
               (note >= 60) ? 'D-' : 'F';

console.log(note, degree)
