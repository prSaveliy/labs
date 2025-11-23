'use strict';

const difference = (array1, array2) => {
    let difference = [];
    for (let item of array1) {
        if (!array2.includes(item)) difference.push(item);
    }
    return difference;
};

const array1 = [7, -2, 10, 5, 0];
const array2 = [0, 10];
const result = difference(array1, array2);
console.log(result);