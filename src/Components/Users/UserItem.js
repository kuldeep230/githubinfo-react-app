import React, { Component } from "react";
import { Link } from "react-router-dom";

class UserItem extends Component {
  render() {
    const { avatar_url, login } = this.props;
    return (
      <div className="p-1 border-1 border-[#ccc] m-0.7 shadow-lg rounded max-w-full h-auto align-middle border-none text-center grid justify-center ">
        <img
          src={avatar_url}
          alt=""
          style={{ width: "190px" }}
          className="rounded-xl"
        />
        <h3 className="font-bold text-xl text-gray-100 pt-2">{login}</h3>
        <div className="p-6">
          <Link
            className=" shadow-lg text-white align-middle border-none bg-gray-100 bg-opacity-25 p-3 rounded font-bold"
            to={`user/${login}`}
          >
            Github Profile
          </Link>
        </div>
      </div>
    );
  }
}
export default UserItem;
