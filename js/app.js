// to create a class, first we initialization it by typing class
class Profile {

    // this is a constructor
    // this method will running automatically when this class is instantiate
    constructor(name) {
        this.name = name
    }

    // this is a method
    callMyName() {
        console.log(`hey, did you call ${this.name} as my Name??`)
    }
}

// now we instantiate the Object
const calling = new Profile("ivandi")

// print out into the console
console.log(calling.callMyName())