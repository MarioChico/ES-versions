// Devuelvue una matriz de cualquier submatriz. Los arreglos anidados forman una matriz, la pregunta es ¿Cómo podemos aplanarla?
// Aplana matrices por profundidad
// Lo que le pasamos al método flat es la profundidad a la que queremos llegar del arreglo 
const array = [1,1,2,3,4, [1,2,5,6, [5,7,8,9]]] 
console.log(array.flat(3));

// Flatmap
// Es el primero que mapea cada uno de los elementos usados basado en una funcion de mapeo y aplana el resultado
const array2 = [1,2,3,4,5]
console.log(array2.flatMap(v => [v, v * 2]));