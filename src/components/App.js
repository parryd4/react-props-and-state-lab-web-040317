import React from 'react';

import Filters from './Filters';
import PetBrowser from './PetBrowser';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'all',
      }
    };
    this.handleAdoptPet = this.handleAdoptPet.bind(this)
    this.handleFindPets = this.handleFindPets.bind(this)
    this.handleFilterTypeChange = this.handleFilterTypeChange.bind(this)
  }
  handleFilterTypeChange(selectedType){
    this.setState({
      filters: Object.assign({}, this.state.filters, { type: selectedType})
    })
    // putting debugger here still shows this.state.filters === { type: "all" }
  }
  handleAdoptPet(adoptedPetId){
    this.setState(function(previousState){
      return {
        adoptedPets: [...previousState.adoptedPets, adoptedPetId]
      }
    })
  }
  handleFindPets(){
    let url = '/api/pets' + (this.state.filters.type === 'all' ? "" : `?type=${this.state.filters.type}`)

    fetch(url)
      .then(response => response.json())
      .then(pets => this.setState({ pets }))

  }
  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters filters={this.state.filters} onChangeType={this.handleFilterTypeChange} onFindPetsClick={this.handleFindPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser adoptedPets={this.state.adoptedPets} pets={this.state.pets} onAdoptPet={this.handleAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
