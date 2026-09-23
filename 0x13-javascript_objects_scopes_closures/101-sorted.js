#!/usr/bin/node

const data = require('./101-data.js');
const newDict = {};

for (const userId in data.dict) {
  const occurrence = data.dict[userId];

  if (!newDict[occurrence]) {
    newDict[occurrence] = [];
  }

  newDict[occurrence].push(userId);
}

console.log(newDict);
