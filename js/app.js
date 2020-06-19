const myArray = [1, 2, 3, 4]

// example One
console.log(Math.max(myArray)) // you would get NaN
console.log(Math.max(...myArray)) // you would get 4

// example two
const myNewArray = [...myArray, 5]
console.log(myNewArray) // add more element into the array

// example three
const anotherNewArray = [...myArray, ...myNewArray]
console.log(anotherNewArray) // [1, 2, 3, 4, 1, 2, 3, 4, 5]