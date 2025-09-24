'use strict';

const range = (start, end) => {
    const len = end - start;
    if (len < 0) return [];
    const array = [];
    for (let i = start; i <= end; i++) {
        array.push(i);
    }
    return array;
};

console.log(range(15, 30));


const rangeOdd = (start, end) => {
    const len = end - start;
    if (len < 0) return [];
    const array = [];
    for (let i = start; i <= end; i++) {
        if (i % 2 == 1) array.push(i); 
    }
    return array;
};

console.log(rangeOdd(15, 30));