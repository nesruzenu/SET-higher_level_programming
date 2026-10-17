#!/usr/bin/node

document.addEventListener('DOMContentLoaded', () => {
  const languageCode = document.querySelector('#language_code');
  const translateButton = document.querySelector('#btn_translate');
  const hello = document.querySelector('#hello');

  async function translate () {
    const lang = languageCode.value.trim();

    if (!lang) {
      hello.textContent = 'Please enter a language code.';
      return;
    }

    try {
      const response = await fetch(
        `https://hellosalut.stefanbohacek.dev/?lang=${encodeURIComponent(lang)}`
      );

      if (!response.ok) {
        throw new Error('Failed to fetch translation');
      }

      const data = await response.json();
      hello.textContent = data.hello;
    } catch (error) {
      hello.textContent = 'Unable to load translation.';
    }
  }

  translateButton.addEventListener('click', translate);

  languageCode.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      translate();
    }
  });
});
