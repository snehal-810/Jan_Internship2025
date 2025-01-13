// ##forEach##

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// movements.forEach(function(movement) {
//     if(movement > 0) {
//         console.log(`You deposited ${movement}`);
//     } else {
//         console.log(`You withdraw ${Math.abs(movement)}`);
//     }
// });

console.log('---- FOREACH ----');
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});