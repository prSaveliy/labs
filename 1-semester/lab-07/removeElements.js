'use strict';

const removeElements = (array, ...items) => {
    for (let item of items) {
        const indx = array.indexOf(item);
        if (indx !== -1) array.splice(indx, 1);
    }
    return array;
};


const array = [1, 2, 3, 4, 5, 6, 7];
removeElements(array, 5, 1, 6);
console.log(array);