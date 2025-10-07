'use strict';

const sum1 = (...args) => {
    if (args.length === 0) return 0;
    let total = 0;
    for (const num of args) {
        total += num;
    }
    return total;
};

// console.log(sum1());

const sum2 = (...args) => {
    if (args.length === 0) return 0;
    let total = 0;
    for (let i = 0; i < args.length; i++) {
        total += args[i];
    }
    return total;
};

// console.log(sum2());

const sum3 = (...args) => {
    if (args.length === 0) return 0;
    let total = 0;
    while (args.length !== 0) {
        total += args[0];
        args.shift();
    }
    return total;
};

// console.log(sum3());

const sum4 = (...args) => {
    if (args.length === 0) return 0;
    let total = 0;
    do {
        total += args[0];
        args.shift()
    } while (args.length !== 0);
    return total;
};

// console.log(sum4());

const sum5 = (...args) => {
    const total = args.reduce((prev_res, next) => prev_res + next, 0);
    return total;
};

// console.log(sum5());