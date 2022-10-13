//Estas promesas vienen para resolver un problema de asincronismo que justamente hace una promesa sobre algo que va a pasar, cuando? hoy, mañana o nunca. Esto es antes de async await
const anotherFunction = () => {
    return new Promise((resolve, reject) => {
        if(false){
            resolve('Si esta funcionando')
        }else{
            reject('No jalo carnal')
        }
    })
}

anotherFunction()
    .then(response => console.log(response))
    .catch(err => console.log(err))
//Este codigo es que hacemos una promesa que algo va a pasar o se va a rechazar, dependiendo el caso, donde pasamos una funcion anonima como argumento y esa funcion tiene dos argumentos, resolve y reject