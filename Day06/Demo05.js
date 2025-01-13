// ## The Spread Opearator(...) ##

// Unpacking all the array elements at once
// Take out all the values of an array and then write them individually

const arr = [7, 8, 9];
const badNewArr = [1,2, arr[0],arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1,2, ...arr];
console.log(newArr);

console.log(...newArr);

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
};

const newMenu = [...restaurant.mainMenu, 'DOSA'];
console.log(newMenu);