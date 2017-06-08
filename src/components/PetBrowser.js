import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {
  render() {
    return (
      <div className="ui cards">
        {
          this.props.pets.map( (singlePet) => { // this.props.pets is the array of pets from the Apps state. this.props.adoptedPets is also from App state, array of already adopted pets.
          return <Pet pet={singlePet} isAdopted={this.props.adoptedPets.includes(singlePet.id)} onAdoptPet={this.props.onAdoptPet} /> // this.props.onAdoptPet is a callback that App passes, this callback can be thought of as the "what happens when adopted"
        } )
        }
      </div>
    );
  }
}

export default PetBrowser;
