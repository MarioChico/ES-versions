// Aqui es tener toda la logica

const button = document.getElementById("btn")

button.addEventListener("click", async function (){
    const module = await import('./module.js')
    console.log(module);
    module.hello()
})

// Esto es buenisimo porque al iniciar la pagina aun no se llama al module, hasta que se desencadena el evento de click, asi solo carga lo minimo y como se interactua llama lo demás. Asi cumples con estandar de performance