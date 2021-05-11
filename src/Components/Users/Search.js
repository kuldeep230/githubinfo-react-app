import React, { Component } from "react";
class Search extends Component {
  state = {
    text: "",
  };

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.searchUsers(this.state.text);
  };
  render() {
    return (
      <div>
        <form
          className="m-1.2 flex justify-center py-5 "
          onSubmit={this.handleSubmit}
        >
          <input
            className="border-none bg-gray-100 bg-opacity-25 rounded md:w-1/3 sm:w-3/4 text-gray-100 mr-5 placeholder-gray-100 pl-5 shadow-lg"
            type="text"
            name="name"
            value={this.state.text}
            placeholder="Search Users..."
            onChange={this.handleChange}
          />
          <input
            className="w-20 h-10 border-none rounded bg-purple-500 bg-opacity-50 text-gray-100 cursor-pointer transition duration-500 ease-in-out bg-blue-600 hover:bg-red-500 hover:bg-opacity-50 transform hover:-translate-y hover:scale-110 shadow-lg"
            type="submit"
            value="Search"
          />
        </form>
      </div>
    );
  }
}
export default Search;
