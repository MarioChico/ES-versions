// Nos permite manejar los errores que tenemos en los try, aunque lo ideal es manejar el error
try{
    hello()
} catch (error){
    console.log(error);
}

try {
    anotherFn()
} catch{
    console.log('Error alv compa');
}