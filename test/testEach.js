const items =[1,2,3,4,5,5];
const each = require("../each");
const cb = (element, index, elements) => {

    console.log(element);

}
each(items, cb);
