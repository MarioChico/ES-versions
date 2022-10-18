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
    .finally(() => console.log('Finally'))
    //permite tener un fn anonima y hacer algo cuando termina, mostrar un mensaje, ejecutar una accion
