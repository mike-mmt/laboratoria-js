'use strict';

let output = ((string) => { return string.split(' ').sort( (a,b) => { return (a.length > b.length) ? -1 : 1 } )[0] })('Ala ma kota');

console.log(output);