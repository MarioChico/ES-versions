var lastName = 'David' //Asignamos con var. Usualmente es global
lastName = 'Oscar' //Reasignamos a otro nombre. Es posible con var
console.log(lastName)

//con let (esto ya es ecma6) Tiene alcance de bloque
let fruit = 'Apple'
fruit = 'Kiwi'
console.log(fruit);

// const Tiene alcance de bloque
const animal = 'Perro'
animal = 'Gato' // No se puede reasignar un valor con const
console.log(animal);

const fruits = () => {
    if(true){
        var fruit1 = 'Apple' //Function scope, accedemos a esta variable dentro de la funcion
        let fruit2 = 'Kiwi' //Block Scope. Solo podemos acceder en el scope declarada 
        const fruit3 = 'Banana' //Block Scope
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruits()