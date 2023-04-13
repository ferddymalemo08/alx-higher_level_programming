#!/usr/bin/node
const digit = Math.floor(Number(process.argv[2]));
console.log(isNaN(digit) ? 'Not a number' : `My number: ${digit}`);
