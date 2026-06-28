console.log("Hello, World!");

//console.log(window) // it will give error

//alert("Hello, World!") // it will give error


const math = require('./math.js') 
// this is how we can import functions from math.js file. 
// We have to use require function to import functions from other files. 
// We have to give the path of the file from which we want to import the functions. 
// In this case we are importing functions from math.js file which is in the same directory as hello.js file. 
// So we have given './math.js' as path. If the file is in different directory then we have to give the relative path of the file. 
// For example if math.js file is in parent directory then we have to give '../math.js' as path. 
// If math.js file is in child directory then we have to give './child-directory/math.js' as path.


//const { add, sub} = require('./math.js') 
// this is another way to import functions from math.js file.
// If we import like this then we can use add(3,4) and sub(3,4) directly in this file.
// There is no need to use math.add(3,4) and math.sub(3,4) in this case.


console.log(math) // it will give object with add function
// it will give an empty object if you don't export the function in math.js


//console.log(add(3,4)) // it will give error because add is not defined in this file

console.log(math.add(3,4)) // it will give 7 because add is exported from math.js and imported here

console.log(math.sub(3,4)) // it will give -1 because sub is exported from math.js and imported here


const file = require("fs") // this is how we can import built-in modules in node.js.
// if we give function like this then it will find that function in built-in modules and import it.
// if we give function like ./math.js then it will find that function in the current directory and import it.
