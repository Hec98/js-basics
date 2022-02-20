const today = new Date(); // {}

// const day = 0; // 0: sunday
const day = today.getDay();
const currentTime = 10;

let openingHour;
let message;

// if (day === 0 || day === 6) {
// if ([0, 6].includes(day)) {
//   console.log('Weekend');
//   openingHour = 9;
// } else {
//   console.log('Day of the week');
//   openingHour = 11;
// }

openingHour = ( [0, 6].includes(day) ) ? 9 : 11;

// if (currentTime >= openingHour) {
//   message = `It's open`;
// } else {
//   message = `It's closed, today we open at ${ openingHour }`;
// }

message = ( currentTime >= openingHour ) ? `It's open` : `It's closed, today we open at ${ openingHour }`;

console.log({ openingHour, message })
