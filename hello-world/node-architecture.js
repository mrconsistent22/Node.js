const fs = require('fs');
const os = require('os');

console.log(os.cpus().length)
// This will log the number of CPU cores available on the system.


// Synchronous - Blocking operation
console.log("1")
const result = fs.readFileSync("hello-world/contact.txt", "utf8")
console.log(result)
console.log("2")
// here execution of the program will wait until the file is read and the content is returned.


// Asynchronous - Non-blocking operation
console.log("3")
fs.readFile("hello-world/contact.txt", "utf8",(err, data) => {
    if(err){
        console.log("Error", err)
    }else{
        console.log(data)
    }
})
console.log("4")
// here execution of the program will not wait until the file is read and the content is returned. 
// It will move on to the next line of code and log "4" to the console. 
// The callback function will be executed once the file is read and the content is returned.



// Synchronous - Blocking operation
// fs.writeFile("hello-world/test1.txt", "Kane Consistent Williamson")


// // Asynchronous - Non-blocking operation
// fs.writeFile("hello-world/test2.txt", "Kane Consistent Williamson", (err, result) => {
//     if(err){
//         console.log("Error", err)
//     }else{
//         console.log("File written successfully")
//     }
// })


// Defaultt thread pool size is 4, which means that only 4 asynchronous operations can be executed at a time.
// Max thread pool size can be changed by setting the UV_THREADPOOL_SIZE environment variable.
// 8core CPU can handle 8 asynchronous operations at a time.