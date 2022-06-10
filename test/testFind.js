const items =[1,2,3,5,5];
const find = require("../find");

const cb = (element, index, elements ) => {

    if (element === 6){
    return true;
    }
}
 
console.log(find(items, cb)); //undefined
