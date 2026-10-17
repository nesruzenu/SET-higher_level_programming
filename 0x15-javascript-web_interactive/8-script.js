async function fetchMovies () {
	  const list = document.querySelector('#list_movies');

	  try {
		      const response = await fetch(
			            'https://swapi-api.alx-tools.com/api/films/?format=json'
			          );

		      if (!response.ok) {
			            throw new Error('Failed to fetch movies');
			          }

		      const data = await response.json();

		      data.results.forEach((movie) => {
			            const item = document.createElement('li');
			            item.textContent = movie.title;
			            list.appendChild(item);
			          });
		    } catch (error) {
			        list.textContent = 'Unable to load movies.';
			      }
}

fetchMovies();

