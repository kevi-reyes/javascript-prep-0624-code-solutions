/* Your JS goes in this file */

function isAdult(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}

// 2

const isAdultResult = isAdult(17);

console.log('isAdultResult', isAdultResult);

// 3

function didStudentPass(score) {
  if (score >= 70) {
    return true;
  } else {
    return false;
  }
}

// 4

const didStudentPassResult = didStudentPass(60);

console.log('didStudentPassResult', didStudentPassResult);

// 5

function gradeCalculator(score) {
  if (score < 60) {
    return 'F';
  } else if (score < 70) {
    return 'D';
  } else if (score < 80) {
    return 'C';
  } else if (score < 90) {
    return 'B';
  } else if (score < 100) {
    return 'A';
  } else if (score > 100) {
    return 'A++';
  }
}

const gradeCalculatorResult = gradeCalculator(90);

console.log('gradeCalculatorResult', gradeCalculatorResult);

// 7

function seasonMessenger(season) {
  if (season === 'summer') {
    return 'it is hot today';
  } else if (season === 'spring') {
    return 'the flowers are blooming';
  } else if (season === 'autumn') {
    return 'the leaves are changing colors';
  } else if (season === 'winter') {
    return 'it is cold today';
  } else {
    return 'please enter a valid season';
  }
}

// 8

const seasonMessengerResult = seasonMessenger('winter');

console.log('seasonMessengerResult', seasonMessengerResult);

//9

function dayDetector(dayOfTheWeek) {
  if (dayOfTheWeek === 'saturday' || dayOfTheWeek === 'sunday') {
    return 'have a good weekend';
  } else {
    return 'It is a weekday!';
  }
}

// 10

const dayDetectorResult = dayDetector('saturday');

console.log('dayDetectorResult', dayDetectorResult);
