const person = {
  firstName: 'Mirage',
  lastName: 'Spots',
  hobby: 'jogging',
};

console.log('person:', person);

const fullName = person.firstName + ' ' + person.lastName;

console.log('fullName', fullName);

person.job = 'companion';

console.log('job', person.job);

person['previousJob'] = 'to sleep';

console.log('previousJob', person['previousJob']);

console.log('person', person);
