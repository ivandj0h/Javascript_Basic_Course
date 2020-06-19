// Create a Class call Person
class Person {

    // create constructor which is running immediately when the class initialized
    constructor(name, age, weight) {
        // creating variables called properties in class based
        this.name = name
        this.age = age
        this.weight = weight
    }

    // creating function called method in class based
    displayName() {
        console.log(`My name is ${this.name}`)
    }
    
    // creating function called method in class based
    displayAge() {
        console.log(`My name is ${this.age}`)
    }
    
    // creating function called method in class based
    displayWeight() {
        console.log(`My name is ${this.weight}`)
    }
}

// now we initialized the object
console.log(personData = new Person('Arjuna', 7, 30))

// Pembatas
console.log('------------------------------------')

// Inheritance
class Programmer extends Person {
    
    constructor(name, age, weight, language) {
        super(name, age, weight)
        
        this.language = language
    }
}

// now we initialized the object
console.log(programmerData = new Programmer('Ivandi', 40, 60, 'Javascript & Python'))
