// ## REST Pattern ##

// SPREAD, because on RIGHT side of '='
const arr = [1,2, ...[3,4]];

// REST, because on LEFT side of '='
const [a,b, ...others] = [1,2,3,4,5];
console.log(a,b,others);

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
};

const [pizza, , risotto, ...otherFood] = [
    ...restaurant.mainMenu,
    ...restaurant.starterMenu,
];
console.log(pizza,risotto,otherFood);