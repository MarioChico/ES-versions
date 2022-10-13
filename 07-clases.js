// Como declarar una clase con la palabra class
//class User{}
// Como instanciar
//const newUser = new User()

class User {
    //Declaracion de metodos
    greetin(){          
        return 'Hello' 
    }
}

const machsa = new User()
console.log(machsa.greetin())
const developer = new User()

//Constructor
class User {
    constructor(){
        console.log('Nuevo usuario');
    }
    greetin(){          
        return 'Hello' 
    }
}

const mario = new User()

// this. Hace referencia al elemento padre que lo contiene
class User{
    constructor(name){
        this.name = name
    }
    // metodos
    speak(){
        return 'Hello'
    }
    greetin(){
        return `${this.speak()} ${this.name}`
    }
}

const kd = new User('KD')
console.log(kd.greetin());

// setters getters
class User{
    constructor(name, age){
        this.name = name
        this.age = age
    }

    speak(){
        return 'Hello'
    }
    greetin(){
        return `${this.speak()} ${this.name}`
    }

    get uAge(){
        return this.age
    }
    set uAge(n){
        this.age = n
    }
}

const worker = new User('Hugo', 45)
console.log(worker.uAge);
console.log(worker.uAge = 34);