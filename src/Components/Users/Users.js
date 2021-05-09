import React, { Component } from "react";
import axios from "axios";

import UserItem from "./UserItem";
import HeroSection from "../Layout/HeroSection";

// class Users extends Component {
//   state = {
//     users: [],
//   };

// async componentDidMount() {
//   try {
//     let res = await axios.get("https://api.github.com/users");
//     this.setState({ users: res.data });
//   } catch (error) {
//     console.error(error);
//   }
// }

// searchUsers = async () => {
//   try {
//     let { data } = await axios.get(
//       `https://api.github.com/users?q=${this.state.text}`
//     );
//     this.setState({ users: data.items });
//   } catch (error) {
//     console.error(error);
//   }
// };

//   render() {
//     return (
//   <div>
//     {/* <Search searchUsers={this.searchUsers} /> */}
//     <div>
//       {this.state.users.map((element) => (
//         <UserItem
//           login={element.login}
//           avatar_url={element.avatar_url}
//           key={element.id}
//         />
//       ))}
//     </div>
//   </div>
// );
//   }
// }

class Users extends Component {
  state = {
    users: [],
  };
  async componentDidMount() {
    try {
      let res = await axios.get("https://api.github.com/users");
      this.setState({ users: res.data });
    } catch (error) {
      console.error(error);
    }
  }

  searchUsers = async () => {
    try {
      let { data } = await axios.get(
        `https://api.github.com/users?q=${this.state.text}`
      );
      this.setState({ users: data.items });
    } catch (error) {
      console.error(error);
    }
  };
  render() {
    return (
      <div>
        <div className="pb-20">
          <HeroSection />
        </div>
        <div className="py-6 px-10 bg-blue-200 bg-opacity-75 rounded-full mt-10 flex flex-col items-center  animate-bounce hover:bg-yellow-300 hover:bg-opacity-75 cursor-pointer ">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
        <div>
          <div className="grid grid-cols-4 gap-10 mt-10 rounded ">
            {this.state.users.map((element) => (
              <UserItem
                login={element.login}
                avatar_url={element.avatar_url}
                key={element.id}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Users;
