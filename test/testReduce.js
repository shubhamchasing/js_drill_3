const items = [1,2,3,4,5,5];
const reduce = require("../reduce");

const cb = (a , b) => {

    return a + b;
}


console.log(reduce(items, cb, 100)); // 120
