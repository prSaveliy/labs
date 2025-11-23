'use strict';

const contract = (fn, ...types) => {
    return (...args) => {
        for (let i = 0; i < types.length - 1; i++) {
            if (types[i].name.toLowerCase() !== typeof args[i]) throw new TypeError("Types are not matching");
        }
        const res = fn(...args);
        if (types[types.length - 1].name.toLowerCase() !== typeof res) throw new TypeError("Types are not matching");
        return res;
    }
};


const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);
const res1 = addNumbers(2, 3);
console.dir(res1);

const concat = (s1, s2) => s1 + s2;
const concatStrings = contract(concat, String, String, String);
const res2 = concatStrings('Hello ', 'world!');
console.dir(res2);
