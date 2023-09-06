const path = require("node:path");

// console.log(__filename);
// console.log(__dirname);

// //basemethod
// console.log(path.basename(__filename));
// console.log(path.basename(__dirname));

// //ext method

// console.log(path.extname(__filename));
// console.log(path.extname(__dirname));

// //parsemethod
// console.log(path.parse(__filename));
// console.log(path.parse(__dirname));
// console.log(path.format(path.parse(__filename)));

// //asAbsolute
// console.log(path.isAbsolute(__filename));
// console.log(path.isAbsolute(__dirname));

// join method 
// join method takes one or more strings

// console.log(path.join("mouni", "jaya" ,"mahi"));
// console.log(path.join("/mouni", "jaya" ,"mahi"));
// console.log(path.join("/mouni", "//jaya" ,"mahi"));
// console.log(path.join("/mouni", "//jaya" ,"../mahi"));
// console.log(path.join(__dirname, "data.json"))
// resolve method
console.log(path.resolve("mouni", "jaya" ,"mahi"));
console.log(path.resolve("/mouni", "jaya" ,"mahi"));
console.log(path.resolve("/mouni", "//jaya" ,"mahi"));
console.log(path.resolve("/mouni", "//jaya" ,"../mahi"));
console.log(path.resolve(__dirname, "data.json"))