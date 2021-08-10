const person = {
    name: 'Monara',
    lastName: 'Calado',
    age: '24',
    profission: 'Developer'
};

console.log(person)

// modo longo de separar as propriedades
// let name = person.name
// let lastName = person.lastName
// let age = person.age
// let profission = person.profession

// craindo variaveis ligadas ao objeto
let { name , lastName, age, profission } = person;

console.log(name, lastName, age, profission);