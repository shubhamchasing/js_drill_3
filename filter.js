const filter = (elements = [], cb) => {
    let arr = [];

    if(elements.length === 0){
        return [];
    }

    for (let index = 0; index < elements.length; index++) {

        if (cb(elements[index], index, elements) == true)
            arr.push(elements[index]);
    }

    return arr;
}

module.exports = filter;
 
