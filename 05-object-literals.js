// enhanced object literals

//Esta es la forma que lo escribiamos antes de, si el mismo nombre que estamos pasado regresa dentro de este objeto
function newUser(user, age, country){
    return {
        user : user,
        age: age,
        country: country
    }
}


//Esta es la nueva forma propuesta
function newUserForm(user, age, country){
    return {
        user,
        age,
        country
    }
}

console.log(newUserForm('machsa', 24, 'MX'));