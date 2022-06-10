const flatten = require('../flatten') ; 

let nestedArray = [undefined, [2], [[3]], [[[4]]],[[5]], [[{4:4}]]]; 


console.log(flatten(nestedArray))  // [ 2, 3, 4, 5, { '4': 4 } ]
