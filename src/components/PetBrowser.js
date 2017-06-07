import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {
  render() {
    return (
      <div className="ui cards">
        {
          //  <code>&lt;Pet /&gt;</code> &nbsp; components should go here
        }
        { //"Wouldn't it be nice if you could pass the tests AND be able to view your app using npm start?"
          this.props.pets.map( (singlePet) => {
          return <Pet pet={singlePet} isAdopted={this.props.adoptedPets.includes(singlePet.id)} onAdoptPet={this.props.onAdoptPet} />
          } )
        }
      </div>
    );
  }
}

export default PetBrowser;
