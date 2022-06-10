const filter = require('../filter') ; 

const items = [1,2,3,4,5,5];

const cb = (element, index, elements) => {

   return element > 2;

}

console.log(filter(items,cb))  //[ 3, 4, 5, 5 ]
