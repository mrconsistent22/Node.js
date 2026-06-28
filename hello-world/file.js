const fs = require('fs');
// This is a simple Node.js script that reads the contents of a file and logs it to the console.
// fs module is a built-in module in Node.js that provides an API for interacting with the file system.

// fs.writeFileSync('hello-world/test.txt', "Hey There");
// This line of code creates a new file named test.txt in the current directory and writes the string "Hey There" to it.
// If the file already exists, it will overwrite the existing content with the new string.
// Synchronous version of writeFile method is used here, which means that the program will wait until the file is written before moving on to the next line of code.


//fs.writeFile('./test.txt', "Hey There", (err) => {});
// Asynchronous version of writeFile method is used here, which means that the program will not wait for the file to be written before moving on to the next line of code.


// const result = fs.readFileSync("hello-world/contact.txt", "utf-8");
// console.log(result);
// It automatically handles the errors and returns the content of the file as a string. The second argument "utf-8" specifies the encoding of the file, which is necessary to read the file correctly.


fs.readFile("hello-world/contact.txt", "utf-8", (err, result) => {
    if (err) {
        console.error("Error", err);
    
    }else{
        console.log(result);
    }
})

// Async dont handle errors automatically, so we need to handle them manually. 
// In this case, we check if there is an error and log it to the console. 
// If there is no error, we log the content of the file to the console.


//fs.appendFileSync("hello-world/test.txt", new Date().getDate().toLocaleString())
fs.appendFileSync("hello-world/test.txt", "Hey there, How are you?\n")


//fs.cpSync("hello-world/test.txt", "hello-world/test2.txt")


//fs.unlinkSync("hello-world/test2.txt")


console.log(fs.statSync("hello-world/test.txt"))


// fs.mkdirSync("hello-world/test-folder/test-folder2", { recursive: true })