const btn = document.querySelector('.btn');
const joke = document.querySelector('#jokes');

const handleFetchJokes = () => {
  fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'application/json',
    },
  })
    .then(response => response.json())
    .then(data => {
      joke.innerHTML = data.joke;
    });
};

handleFetchJokes();
btn.addEventListener('click', handleFetchJokes);
