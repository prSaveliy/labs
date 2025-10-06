'use strict';

const ipToint = (ip = '127.0.0.1') => {
    return ip.split('.').map(Number).reduce((res, item) => (res << 8) + item, 0);
};

console.log(ipToint());