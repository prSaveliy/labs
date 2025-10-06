'use strict';

const methods = (iface) => {
    const func_names = [];
    for (const func_name in iface) {
        if (typeof iface[func_name] === 'function') {
            func_names.push([func_name, iface[func_name].length]);
        }
    }
    return func_names;
};

const iface = {
    add(a, b) { return a + b; },
    greet(name) { console.log('Hi, ' + name); }
};

console.log(methods(iface));