// pasar de un array de array a un objeto de javascript

const entries = new Map([["name", 'Mario'], ["age", 24]])
console.log(entries);
console.log(Object.fromEntries(entries));