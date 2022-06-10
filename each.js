const each = (elements = [], cb) => {
    
    if(elements.length === 0){
        return [];
    }

    for(let  index=0; index < elements.length; index++) {
        cb(elements[index], index, elements) ;

    }
} 
module.exports = each;
 
