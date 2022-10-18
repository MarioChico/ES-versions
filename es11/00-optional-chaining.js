// Nos salva cuando trabajamos con manipulacion de arrays y querer acceder a elementos dentro de ella y se asigna con el simbolo de pregunta ?, sino encuentra esa información regresa undefined
// No abusar del encadenamiento, solo cuando es posible que un valor no exista, si sabemos que users siempre va existir, a ese no lo encadenamos, pues futuros errores los puede ocultar con un undefined y dificulta el debug
const users = {
    machsa: {
        country: 'MX'
    },
    ana: {
        country: 'CO'
    }
}

console.log(users?.bebeloper?.country );