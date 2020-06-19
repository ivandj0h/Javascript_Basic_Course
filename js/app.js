const myProfile = {
    myName: 'Ivandi',
    myAge: 40,
    myFavouriteLanguage: ['javascript', 'python']
}

const { myName, myAge, myFavouriteLanguage } = myProfile;

console.log(`Hello, my name is ${myName}, i am ${myAge} years old and i am a programmer who loves ${myProfile.myFavouriteLanguage[0]} and ${myProfile.myFavouriteLanguage[1]}`)