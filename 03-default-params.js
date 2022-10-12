//ANTES
function newUser(name, age,country){
    var name = name || 'Mario'
    var age = age || 24
    var country = country || 'MX'
    console.log(name, age, country);
}
newUser()
newUser('Ijole', 45, 'PH')

//Nueva forma en ES6, amigable y mejor

function newAdmin(name = 'Mario', age = 24, country = 'MX'){
    console.log(name, age, country);
}
newAdmin()
newAdmin('Vazquez', 13, 'CB')