const returnTrue = () => {
  console.log('Return true');
  return true;
};

const returnFalse = () => {
 console.log('Return false');
  return false;
};

console.log('__Not or denial__');
console.log(true);
console.log(!true);
console.log(!false);

console.log(!returnTrue());
console.log(!returnFalse());

console.log('__And__'); // Return true if all values are true
console.log(true && true);
console.log(true && !false);

console.log('_________________');
console.log(returnTrue() && returnFalse());
console.log(!returnFalse() && returnTrue());

console.log('_________________');
returnFalse() && returnTrue();

console.log('__OR__');
console.log(true || false)
console.log(false || false)

returnTrue() || returnFalse();

// assignments
console.log('__Assignments__')

const iUndefined = undefined;
const iNull = null;
const iFalse = false;

const a1 = false && 'Hello World' && 150;
const a2 = 'Hello' && 'World';
const a3 = iFalse || 'I not false';
const a4 = iFalse || iFalse || 'I not false!!!' || true;
const a5 = iFalse || returnTrue() || 'I not false!!!' || true;
console.log({ a1, a2, a3, a4, a5 });
