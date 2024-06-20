const number1 = 1;
const number2 = 2;

const product = number1 * number2;

console.log('product', product, 'typeof', typeof product);

const charge = 4;
const payment = 3;
const amountRemaining = charge - payment;

console.log(
  'amountRemaining',
  amountRemaining,
  'typeof',
  typeof amountRemaining
);

const tests = 2;
const assignments = 5;
const final = 1;
const grade = (tests + assignments + final) / 3;

console.log('grade', grade, 'typeof', typeof grade);

const firstName = 'kevin';

const lastName = 'reyes';

const fullName = firstName + ' ' + lastName;

console.log('fullName', fullName, 'typeof', typeof fullName);

const pH = 7;
const isAcidic = pH < 7;

console.log('isAcidic', isAcidic, 'typeof', typeof isAcidic);

const numberOfSoldiers = 7;
const isSparta = 300 === numberOfSoldiers;

console.log('isSparta', isSparta, 'typeof', typeof isSparta);

let nickname = fullName;
nickname += ' is the GOAT';
console.log('nickname', nickname, 'typeof', typeof nickname);
