// forEach Array Method
let txt = "";
let numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction);

function myFunction(value) {
  txt = txt + value + " ";
}

console.log(txt);

// Array Sort
let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);
fruits.sort();
fruits.reverse();
console.log(fruits);
