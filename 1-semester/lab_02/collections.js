'use strict';

const array = [
    { name: 'Kendrick Lamar', phone: '+11857428496' },
    { name: 'Saveliy', phone: '+380507470046' }
];

const findPhoneByName1 = (name) => {
    for (const obj of array) {
        if (obj.name === name) return obj.phone;
    }
};

const hash_table = {
    Kendrick: '+11857428496',
    Saveliy: '+380507470046'
};

const findPhoneByName2 = (name) => hash_table[name];