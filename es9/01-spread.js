// se usa para copiar lo que esta en las claves en nuestros objetos
const user = {username: 'Mario', age: 24, country: 'MX'}
const {username, ...values} = user
console.table(username)
console.table(values)
// Esto tiene sentido cuando se esta transformando objetos, arreglos y manipulaciones para obtener ciertos elementos de un array