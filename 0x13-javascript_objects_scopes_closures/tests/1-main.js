#!/usr/bin/node
const Rectangle = require('../1-rectangle');

const re1 = new Rectangle(2, 3);
console.log(re1);
console.log(re1.width);
console.log(re1.height);

const re2 = new Rectangle(2, -3);
console.log(re2);
console.log(re2.width);
console.log(re2.height);

const re3 = new Rectangle(2);
console.log(re3);
console.log(re3.width);
console.log(re3.height);
