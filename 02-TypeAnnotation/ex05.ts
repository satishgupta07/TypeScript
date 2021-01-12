// let vs const

let str = 'Hello';
let valid = false;

// value becomes the type
const fruitName = 'apple';
const isValid = true;

const fruitNames = ['apple', 'mango'];
fruitNames.push('banana');
// fruitNames = ['banana', 'guava'];
console.log(fruitNames);

let anotherFruitNames = ['banana', 'Guava'];
anotherFruitNames.push('mango');
console.log(anotherFruitNames);

anotherFruitNames = ['test'];
console.log(anotherFruitNames);

export default null;