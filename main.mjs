//both 1 and 2 patterns
// import add from "./math-esm.mjs";

// console.log(add(5 ,5));

// 3rd pattern

// import math from "./math-esm.mjs";

// const { add, subtract}= math;

// console.log(math.add(5 ,5));
// console.log(math.subtract(5 ,5));
// destructuiring

// import math from "./math-esm.mjs";

// const { add, subtract}= math;

// console.log(add(5 ,5));
// console.log(subtract(5 ,5));



// 4th pattern we can import in  ways
// first way

// import * as math from "./math-esm.mjs";
// const { add, subtract}= math;

// console.log(add(5 ,5));
// console.log(subtract(5 ,5));

// 2nd way
import {add, subtract} from "./math-esm.mjs";
// remove additional desturcturing / compare beforre code
console.log(add(5 ,5));
console.log(subtract(5 ,5));

// these are different patterns to import and export EsModule format

 
