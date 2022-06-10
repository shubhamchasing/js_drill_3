const flatten = (array = []) => {

    if(array.length === 0){
        return [];
    }

    let flatArray = [];
    for (let i = 0; i < array.length; i++) {
        
        if (Array.isArray(array[i])) {
            let flatElem = flatten(array[i])
            flatArray.push(...flatElem);
        }
        else if(array[i] === undefined){
            continue;
        }
        else {
            flatArray.push(array[i]);
        }
    }
    return flatArray;
}
module.exports = flatten ;
 
