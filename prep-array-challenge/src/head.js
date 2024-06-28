/* exported head */

//head

function head(array) {
  return array[0];
}

// last
function last(array) {
  let bag = array.length - 1; // bag is total length of array
  return array[bag];
}

// tail

function tail(array) {
  const bag = [];
  let add = 0; // need help with this
  for (let i = 1; i < array.length; i++) {
    bag[add] = array[i];
    add++;

    //return console.log('array without first value', array[i]);
  }
  return bag;
}

//initial

function initial(array) {
  const bag = [];
  let add = 0;

  for (let i = 0; i < array.length - 1; i++) {
    bag[add] = array[i];
    add++;
  }
  return bag;
}

// reverse

function reverse(array) {
  const bag = [];
  let add = 0;

  for (let i = array.length - 1; i >= 0; i--) {
    // i dont understand why the = needed and not just > 0
    bag[add] = array[i];
    add++;
  }
  return bag;
}

// compact
function compact(array) {
  const bag = [];
  let add = 0;
  for (let i = 0; i < array.length; i++)
    if (array[i]) {
      bag[add] = array[i];
      add++;
    }
  return bag;
}
