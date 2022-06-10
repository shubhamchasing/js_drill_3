const items =[1,2,3,4,5,5];
const map = require("../map");

const cb = (element, index, elements) => {
    return element * element ;

}

 
console.log(map(items,cb )) //[ 1, 4, 9, 16, 25, 25 ]
