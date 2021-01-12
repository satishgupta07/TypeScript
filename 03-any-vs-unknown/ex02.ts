// unknown: is the most restrictive type

let str: unknown = 'hello';

// TS throws error.
// console.log(str.toUpperCase());

// "typeof" type guard / type narrowing
if (typeof str === 'string') {
  console.log(str.toUpperCase());
}
if (typeof str === 'number') {
  str;
}

class Person {
  name = 'Anup';
}

str = new Person();

// "instanceof" type guard
if (str instanceof Person) {
  console.log(str.name);
}

export default null;