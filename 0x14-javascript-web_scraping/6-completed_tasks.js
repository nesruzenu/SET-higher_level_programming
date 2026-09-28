#!/usr/bin/node

const request = require('request');

request.get(process.argv[2], (error, response, body) => {
  if (error) {
    console.log(error);
    return;
  }

  const todos = JSON.parse(body);
  const counts = {};

  todos.forEach((todo) => {
    if (todo.completed) {
      if (!counts[todo.userId]) {
        counts[todo.userId] = 0;
      }
      counts[todo.userId] += 1;
    }
  });

  console.log(counts);
});
