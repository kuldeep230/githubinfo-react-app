import React, { Component } from "react";
import Spinner from "../Layout/Spinner";
import Repos from "./Repos";

class Profile extends Component {
  componentDidMount() {
    let { userId } = this.props.match.params;
    this.props.getUserAndRepoInfo(userId);
  }
  render() {
    return (
      <>
        {this.props.loading ? (
          <div className="h-screen">
            <Spinner />
          </div>
        ) : (
          <div className="h-full">
            <div className="flex justify-center text-gray-100">
              <div className="bg-gray-700 bg-opacity-25 rounded-full h-1/2 w-8/12 mt-5 shadow-inner">
                <div className="flex justify-start   ">
                  <div className="flex">
                    <img
                      src={this.props.user.avatar_url}
                      className="rounded-full"
                      style={{ width: "350px" }}
                      alt=""
                    />
                    <div className=" pl-10 pt-3.5">
                      <h1 className="text-3xl font-bold pt-8 lg:pt-0 text-gray-100">
                        {this.props.user.name}
                      </h1>
                      <h3 className="text-2xl font-bold pt-8 lg:pt-0 text-gray-300">
                        {this.props.user.login}
                      </h3>
                      <div className="mx-auto lg:mx-0  pt-3 border-b-2 border-gray-200  opacity-25 max-w-sm"></div>
                      <p className="pt-4 max-w-sm">
                        {this.props.user.bio && (
                          <>
                            <p>{this.props.user.bio}</p>
                          </>
                        )}
                      </p>
                      <p className="m-2">
                        {" "}
                        <i className="fas fa-map-marker-alt text-red-100 pr-4"></i>
                        Location : {this.props.user.location}
                      </p>
                      <p className="m-2 mb-6">
                        <i className="fas fa-building text-red-100 pr-4"></i>
                        Company : {this.props.user.company}
                      </p>
                      <div className="text-base font-bold flex items-center justify-center lg:justify-start">
                        <button className="shadow-lg align-middle border-none bg-gray-100 bg-opacity-25 p-3 rounded font-bold transition duration-500 ease-in-out hover:bg-purple-300 hover:bg-opacity-50 transform hover:-translate-y-1 hover:scale-110 hover:text-green-200 ">
                          <a
                            href={this.props.user.html_url}
                            classsName=""
                            target="_blank"
                            rel="noreferrer"
                          >
                            Direct Github Link{" "}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              />
                            </svg>
                          </a>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-gray-700 bg-opacity-25 rounded-full h-10 w-1/2 mt-0.5 shadow-inner">
                <div className="text-center flex justify-around mt-1.5 text-white font-bold ">
                  <div className="h-7 w-40 bg-green-300 bg-opacity-50 rounded-3xl">
                    Followers : {this.props.user.followers}
                  </div>
                  <div className="h-7 w-36 bg-yellow-100 bg-opacity-50 rounded-3xl">
                    Following : {this.props.user.following}
                  </div>
                  <div className="h-7 w-40 bg-red-100 bg-opacity-50 rounded-3xl">
                    Public Repos : {this.props.user.public_repos}
                  </div>
                  <div className="h-7 w-36 bg-blue-300 bg-opacity-50 rounded-3xl">
                    Public Gists : {this.props.user.public_gists}
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-700 bg-opacity-25 rounded-3xl h-screen w-full mt-0.5">
              <div className="grid justify-center mt-1 ">
                <h1 className="text-center text-3xl font-bold lg:pt-0 text-purple-200 animate-pulse bg-gray-100 bg-opacity-25 h-12 w-56 rounded-2xl mt-1  ">
                  <i>Repositories</i>
                </h1>
              </div>
              <Repos repos={this.props.repos} />
            </div>
          </div>
        )}
      </>
    );
  }
}
export default Profile;
