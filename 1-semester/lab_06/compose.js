'use strict';

const compose = (...fns) => {
    const handlers = [];

    const calculate = (x) => {
        let res = x;
        try {
            fns.slice().reverse().forEach((fn) => {
                res = fn(res);
            });
        } catch (error) {
            handlers.forEach((handler) => {
                handler(error);
            });
            return undefined;
        }
        return res;
    };

    calculate.on = (event, handler) => {
        if (event === 'error') handlers.push(handler);
    };

    return calculate;
};


const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

const f = compose(inc, inc, cube);
console.log(f(7));
const g = compose(cube, twice, twice);
console.log(g(3));
const u = compose(inc, 8);
console.log(u(10));