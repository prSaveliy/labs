'use strict';

const fn = () => {
  const obj1 = { name: 'Kendrick' };
  let obj2 = { name: 'Kendrick' };

  obj1.name = 'Lamar';
  obj2.name = 'Lamar';

  obj2 = { name: 'Kendrick Lamar' };
};

const createUser = (name, city) => {
    return { name: name, city: city };
};

console.log(createUser('Kendrick Lamar', 'Compton'))

