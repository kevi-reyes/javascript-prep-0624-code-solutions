// create your loops here.

//While Loops

function whileLoop1() {
  const arr = [];

  let i = 0;
  while (i < 10) {
    arr.push(i);
    i++;
  }
  return arr;
}

//2

const whileLoop1Result = whileLoop1();
console.log('whileLoop1Result', whileLoop1Result);

//3

function whileLoop2() {
  const box = [];

  let i = 0;

  while (i <= 18) {
    box.push(i);
    i += 2;
  }
  return box;
}

// 4

const whileLoop2Result = whileLoop2();
console.log('whileLoop2Result', whileLoop2Result);

// for loops

function forLoop1() {
  const bag = [];

  for (let i = 0; i <= 9; i++) {
    bag.push(i);
  }
  return bag;
}

//2
const forLoop1Result = forLoop1();
console.log('forLoop1Result', forLoop1Result);

// 3

function forLoop2() {
  for (let i = 100; i >= 0; i--) {
    console.log('Time to explosion: ' + i + '!');
  }
}

// 4

forLoop2();

// For...in Loops

const person = {
  name: 'Ada LoveLace',
  age: 'classic',
  hobby: 'computation',
  invention: 'analytical engine',
};

function forInLoop1(object) {
  const arr = [];
  for (const key in person) {
    arr.push(key);
  }
  return arr;
}

// 2

const forInLoop1Result = forInLoop1();

console.log('forInLoop1Result', forInLoop1Result);

//3

function forInLoop2(object) {
  const arr = [];
  for (const key in person) {
    arr.push(person[key]);
  }
  return arr;
}

// 4

const forInLoop2Result = forInLoop2(person);
console.log('forInLoop2Result', forInLoop2Result);
