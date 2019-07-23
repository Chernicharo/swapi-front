import React, { Component }  from 'react';
import * as SwapiAPI from './SwapiAPI';
import './App.css';

export default class App extends Component {
  state = {
    planetCount: 0,
    planet: 
      {
        "name": "Planet Name",
        "climate": "climate",
        "terrain": "terrain",
        "population": "population",
        "films": [],
      }
  };

  async componentWillMount() {
    await this.planetCount();
    await this.getPlanet(Math.floor((Math.random() * this.state.planetCount) + 1)); 
  }

  async getPlanet(id){
    await SwapiAPI.getPlanet(id)
      .then((planetRes => {
        this.setState(() => ({
          planet: planetRes
        }))
      }))
  }

  async planetCount(){
    await SwapiAPI.getPlanets()
      .then((planets => {
        this.setState(() => ({
          planetCount: planets.count
        }))
      }))
  }

  render() {

    const { planet } = this.state;

    return (
      <div className="App">
        <div className="warp">
        <div className="title">{planet.name}</div>
        <div className="content">
          <p className="population"><strong>Population:</strong> {planet.population}</p>
          <p className="climate"><strong>Climate:</strong> {planet.climate}</p>
          <p className="terrain"><strong>Terrain:</strong> {planet.terrain}</p>
          <p className="feature-header"><strong>Feature in {this.state.planet.films.length} films</strong></p>
        </div>
        <button onClick={() => this.getPlanet(Math.floor((Math.random() * this.state.planetCount) + 1))} >Next</button>
      </div>
      </div>
    );
    }
}

