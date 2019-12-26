import React from "react";

class Search extends React.Component {
  state = {
    city:'Mlyniv'
  };
  GetCity = e => {
    this.setState({
      city:e.target.value
    })
  }

  GetValue = e => {
    e.preventDefault();
    const { city } = this.state;
    this.props.GetTown(city) 
  };

  render() {
    return (
      <div className="col-8 offset-4">
        <nav className="navbar navbar">
          <form onSubmit={this.GetValue} className="form-inline">
            <input
              className="form-control mr-sm-2"
              type="text"
              placeholder="Search"
              aria-label="Search"
              onChange={this.GetCity}
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="button submit"
            >
              Search
            </button>
          </form>
        </nav>
      </div>
    );
  }
}
export default Search;
