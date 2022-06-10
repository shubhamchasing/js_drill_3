const find = (elements = [], cb) => {

    if (elements.length === 0){
        return;
    }

    for(let index = 0; index < elements.length; index++){
        let answer = cb(elements[index], index, elements) ;
        if( answer ){

        return elements[index];

        }
    }
    return;
}
module.exports = find;
  
