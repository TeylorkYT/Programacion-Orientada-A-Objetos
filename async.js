function fetchData() {
    fetch('https://rickandmortyapi.com/api/character')
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}

fetchData();