class User{
    constructor(name, age){
        this.name = name
        this.age = age
    }
    // Con # se vuelve privado y solo puede ser accedido dentro de la misma clase
    #speak(){
        return 'Hello'
    }
    greetin(){
        return `${this.speak()} ${this.name}`
    }

    get #uAge(){
        return this.age
    }
    set #uAge(n){
        this.age = n
    }
}

const worker = new User('Hugo', 45)
console.log(worker.uAge);
console.log(worker.uAge = 34);