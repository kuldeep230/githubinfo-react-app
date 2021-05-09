import React, { Component } from "react";
class Search extends Component {
  state = {
    text: "",
  };

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    this.props.searchUsers(this.state.text);
  };
  render() {
    return (
      <div>
        <form className="" onSubmit={this.handleSubmit}>
          <input
            className="mt-1.2rem mr-0 "
            type="text"
            name="name"
            value={this.state.text}
            placeholder="Search Users..."
            onChange={this.handleChange}
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-dark btn-block"
          />
        </form>
      </div>
    );
  }
}
export default Search;
