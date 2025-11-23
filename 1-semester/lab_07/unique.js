'use strict';

const unique = (array) => {
    let unique_array = [];
    for (let item of array) {
        if (!unique_array.includes(item)) unique_array.push(item);
    }
    return unique_array;
};

const result = unique([2, 1, 1, 3, 2]);
console.log(result);