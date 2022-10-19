import fetch from "node-fetch";

const response = await fetch('https://api.escuelajs.co/api/v1/products')
const products = await response.json()

export {products}

// con el top level ya no tenemos la necesidad de hacer encapsulamiento de funcion para opbtener lo productos, retornarlos y exportar la funcion para llamarla donde sea necesario, usando asyn y await
// Si no tenemos el await no puede procesar la informacion, con await ayuda a esperar a regresar la info del server, la respuesta y transformalos en un objeto para usarlos y muestralos