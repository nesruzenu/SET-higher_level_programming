#!/usr/bin/node

const fs = require('fs');

const source1 = process.argv[2];
const source2 = process.argv[3];
const destination = process.argv[4];

const data1 = fs.readFileSync(source1);
const data2 = fs.readFileSync(source2);

fs.writeFileSync(destination, Buffer.concat([data1, data2]));
