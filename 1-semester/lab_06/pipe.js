'use strict';

const pipe = (...fns) => {
    fns.forEach((fn) => {
        if (typeof fn !== "function") throw console.error("Not a func");
    })
    return (x) => {
        let res = x;
        fns.forEach((fn) => {
            res = fn(res);
        })
        return res;
    };
};


const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

const f = pipe(inc, inc, cube);
console.log(f(7));
const g = pipe(cube, twice, twice);
console.log(g(3));
const u = pipe(inc, 8);
console.log(u(10));