#!/usr/bin/node

const request = require('request');

const movieId = process.argv[2];
const movieUrl = `https://swapi-api.hbtn.io/api/films/${movieId}`;

request(movieUrl, (error, response, body) => {
  if (error) return;

  const movie = JSON.parse(body);
  const characters = movie.characters;
  let index = 0;

  const getCharacter = () => {
    if (index === characters.length) return;

    request(characters[index], (error, response, body) => {
      if (!error) {
        const character = JSON.parse(body);
        console.log(character.name);
      }

      index++;
      getCharacter();
    });
  };

  getCharacter();
});
