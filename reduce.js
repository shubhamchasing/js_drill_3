const reduce = (elements = [], cb, startingValue) => {

    if (elements.length === 0){
        return [];
    }
    
    let index = 0
    let previousValue = startingValue
    if (typeof(startingValue) === "undefined"){
        if (elements.length >= 1){    
        previousValue = elements[0]
    }
        index = 1
    }

    for(index; index < elements.length; index++){

        previousValue = cb(previousValue, elements[index], index, elements)
    }

    return previousValue
}

module.exports = reduce
