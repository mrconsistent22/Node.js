function add(a, b){
    return a + b;
}

function sub(a, b){
    return a - b;
}

module.exports = {
    add,
    sub,
}

// module.exports = {
//     addFn: add,
//     subFn: sub,
// }
// we can also export functions with different names as shown above. 
// In this case we have exported add function with name addFn and sub function with name subFn.
// So we can import them with these names in hello.js file.
// So we can use math.addFn(3,4) and math.subFn(3,4) in hello.js file.

// module.exports = add
// module.export = sub
// if we write like this it will give error because we can export only one function at a time. 
// If we want to export multiple functions then we have to use object as shown above.
// sub will overwrite add function if we write module.exports = sub. So we have to use object to export multiple functions.


// exports.add = (a, b) => a + b;
// exports.sub = (a, b) => a - b;
// This is another way to export functions from math.js file.
// It don't overwrite the previous exports. 
// So we can export multiple functions using this way as well.
