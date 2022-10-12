// Arrays destructuring
let fruits = ['Apple', 'Banana']
let [a,b] = fruits
console.log(a,b);

// Object destructuring
let user = {username: 'Mario', age: 24}
let {username, age} = user
console.log(username, age);


// Spread Operator

let person = {name: 'Mario', age: 24}
let country = 'MX'
//Con los 3 puntos hace la destructuracion, para traer esos elementos de person
let data = {...person, country}
console.log(data);

let emoji = [..."👨‍👦‍👦"]
console.log(emoji);

// rest. parametros rest Dan ventaja al usar objetos, arreglos, funciones y elementos que queremos componer con la informacion

function sum(num, ...values){
    console.log(values);
    console.log(num + values[0]);
    return num + values[1]
}

console.log(sum(3,5,6,8,9,3,2))

