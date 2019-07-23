const api = 'https://swapi.co/api'

export const getPlanets = () =>
    fetch(`${api}/planets/`)
        .then(res => res.json())
        //.then(data => data.)

export const getPlanet = (id) =>
    fetch(`${api}/planets/${id}`)
        .then(res => res.json())