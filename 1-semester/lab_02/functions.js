'use strict';

const average = (a, b) => {
    return (a + b) / 2;
};

const square = (x) => {
    return x ** 2;
};

const cube = (x) => {
    return x ** 3;
};

const calculate = () => {
    const array = [];
    for (let i = 0; i < 10; i++) {
        const sq = square(i);
        const cb = cube(i);
        const avg = average(sq, cb);
        array.push(avg);
    }
    return array;
};

console.log(calculate())