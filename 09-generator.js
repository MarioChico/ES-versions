// Generator nos permite tener una funcion de tipo especial que retorna una serie de valores recordando el recurso. Tipo de iterador personalizado. Mantiene el estado
// Con el asterisco se que es un generator
function* iterate(array){
    for(let value of array){
        yield value
    }
}
// La palabra reservada yield hace referencia al valor retornado cada vez que se invoque, recordando el valor anterior.

// Crear una variable a partir de la función generadora.
const it = iterate(['Mario','Andor','Mando', 'Lando'])
// El método next devuelve un objeto que contiene una propiedad value con cada valor de yield; y otra propiedad done con el valor true o false si el generador ha terminado.
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
// Esto lo que hace es imprimir el console del siguiente valor, no pasamos referencia de la posicion. Aqui es donde vemos eso que recuerda el estado, pues pasa a la siguiente posicion