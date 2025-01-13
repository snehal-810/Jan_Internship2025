// ## Destructuring Arrays ##

// Unpacking values from an array into seprate variables

const arr = [2,3,4];
const a = arr[0];
const b = arr[2];
const c = arr[3];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(x);
// Not affecting original array
console.log(arr);

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
};

// const [first,second] = restaurant.categories;
// console.log(first,second);

const [first, , second] = restaurant.categories;
console.log(first, second);
