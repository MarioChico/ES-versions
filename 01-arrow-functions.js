function square(num){
    return num*num
}

//Se recomienda hacer con const aunqye puede ser con let y var
const square = (num) => {
    return num*num
}

//Que pasa si quiero pasar un parametro con el return explicito, sin tener bloques o sintaxis. Permite reducir condigo y que siga siendo amigable
const square = num => num*num
// Con un solo argumento podemos omitir los parentesis, las llaves(handlebars) y return. Con mas de un argumento si es requerido. Return explicito