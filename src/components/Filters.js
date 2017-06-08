import React from 'react';

class Filters extends React.Component {
  constructor() {
    super();

    this.handleFilterTypeChange = this.handleFilterTypeChange.bind(this)
  }

  handleFilterTypeChange(event) {
    // this.props.filters.type = event.target.value // doesn't pass test. wants to use callback?
    this.props.onChangeType(event.target.value) // passes test but cant see page bc onChangeType isnt a function.
    // event.target.value is a TYPE
  }

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" onChange={this.handleFilterTypeChange}
          value={this.props.filters.type}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick={this.props.onFindPetsClick}>Find pets</button>
        </div>
      </div>
    );
  }
}

export default Filters;
