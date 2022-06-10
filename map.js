const map = (elements = [], cb) => {

    if (elements.length === 0){
        return [];
    }
    
    let arr =[];
    for (let index = 0; index < elements.length; index++) {

        let transformElement = cb(elements[index], index, elements);
        arr.push(transformElement);
    }
    return arr;
}

module.exports = map;
 
