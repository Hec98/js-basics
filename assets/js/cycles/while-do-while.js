const cars = ['Ford', 'Mazda', 'Honda', 'Toyota'];

let i = 0;

while(i < cars.length) {
  console.log(cars[i]);
  i+=1;
}

// undefined
// null
// false
console.log('---------')

let j = 0;
while(cars[j]) {
  if (j === 1) {
    //break;
    j++;
    continue;
  }
  console.log(cars[j]);
  j++;
}

console.log('do while');

let k = 0;
do {
  console.log(cars[k]);
  k++;
} while(cars[k]);
