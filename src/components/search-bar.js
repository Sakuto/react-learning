import React, { Component } from 'react'

export class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { searchText: "", placeHolder: "Entrez votre recherche" };
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-8">
          <input type="text" className="form-control input-lg" onChange={this.inputChange.bind(this)} placeholder={this.state.placeHolder} />
        </div>
      </div>
    )
  }

  inputChange(e) {
    this.setState({ searchText: e.target.value});
  }
}

export default SearchBar
