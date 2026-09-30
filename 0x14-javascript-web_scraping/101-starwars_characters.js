#!/usr/bin/node

const request = require('request');

const movieId = process.argv[2];
const movieUrl = `https://swapi-api.hbtn.io/api/films/${movieId}`;

request(movieUrl, (error, response, body) => {
  if (error) return;

  const movie = JSON.parse(body);
  const characters = movie.characters;
  const names = new Array(characters.length);
  let completed = 0;

  characters.forEach((url, index) => {
    request(url, (error, response, body) => {
      if (!error) {
        const character = JSON.parse(body);
        names[index] = character.name;
      }

      completed++;

      if (completed === characters.length) {
        names.forEach((name) => console.log(name));
      }
    });
  });
});
