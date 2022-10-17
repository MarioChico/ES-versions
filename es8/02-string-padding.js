// Rellena un string con los caracteres pasados y dependiendo del tamaño del string que queramos rellenar lo va regresar identico al declarado o rellenando las partes faltantes con la palabra que le enviamos
const string = 'Hello'

console.log(string.padStart(7, 'hi')); // hiHello rellena al inicio del string los espacios faltantes con la palabra pasada como parametro
console.log(string.padStart(5, 'hi')); // Regresa la palabra declara porque el numero de caracteres es igual a la declaracion
console.log(string.padStart(10, 'hi'));
console.log(string.padStart(11, 'hi'));
console.log(string.padEnd(6, '_'));