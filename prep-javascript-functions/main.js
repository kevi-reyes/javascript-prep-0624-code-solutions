// addTwoNumbers

function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

const sum = addTwoNumbers(3, 3);

console.log('sum', sum);

//convertHoursToMinutes

function convertHoursToMinutes(hours) {
  return hours * 60;
}

const minutes = convertHoursToMinutes(3);
console.log('minutes', minutes);

//getGreeting

function getGreeting(name) {
  return name + ' ' + ' understands this! hopefully ...';
}

const greeting = getGreeting('kevin');

console.log('greeting', greeting);

// addAndMultiplyBy5

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

const sumTimesFive = addAndMultiplyBy5(10, 5);

console.log('sumTimesFive', sumTimesFive);

//multiplyAndDivideBy5

function multiplyAndDivideBy5(num1, num2) {
  return (num1 + num2) / 5;
}

const productDividedByFive = multiplyAndDivideBy5(35, 10);

console.log('productDividedByFive', productDividedByFive);

// subtractTwoNumbers

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

const difference = subtractTwoNumbers(22, 7);

console.log('difference', difference);

// getCircleCircumference
function getCircleCircumference(radius) {
  return 2 * radius * 3.14;
}

const circumference = getCircleCircumference(5);

console.log('circumference', circumference);

// getFullName
function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

const fullName = getFullName('Juan', 'Ramirez');

console.log('fullName', fullName);

// cube

function cube(number) {
  return number * number * number;
}

const cubed = cube(5);

console.log('cubed', cubed);
