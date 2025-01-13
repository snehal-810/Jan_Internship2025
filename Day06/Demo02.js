// ## Objects ##

const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
  ];

// We Can Reference each of the values by using object(key->value)
  const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
  };

  console.log(jonas);

// To Retreive data from object: DOT VS. Bracket

console.log(jonas.lastName);
console.log(jonas['lastName']);


const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');

// console.log(jonas.interestedIn); //Not Posiible

console.log(jonas[interestedIn]);

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
  } else {
    console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
  }