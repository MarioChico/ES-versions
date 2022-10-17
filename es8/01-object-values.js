// Devuelve un array con los valores correspondientes a las propiedades enumerables de un objeto

const countries = {
    MX: 'Mexico',
    CO: 'Colombia',
    CL: 'Chile',
    PE: 'Peru'
}
console.log(Object.values(countries));
// Transformamos la informacion, solamente los valores. La llave la dejamos de lado. Asi obtenemos un array de strings