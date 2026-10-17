#!/usr/bin/node

document.addEventListener('DOMContentLoaded', async () => {
  const hello = document.querySelector('#hello');

  try {
    const response = await fetch(
      'https://hellosalut.stefanbohacek.dev/?lang=fr'
    );

    if (!response.ok) {
      throw new Error('Failed to fetch greeting');
    }

    const data = await response.json();
    hello.textContent = data.hello;
  } catch (error) {
    hello.textContent = 'Unable to load greeting.';
  }
});
