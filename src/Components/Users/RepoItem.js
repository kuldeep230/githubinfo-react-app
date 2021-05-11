import React from "react";

const RepoItem = ({ repo }) => {
  return (
    <div className="p-1 m-4 bg-gray-100 bg-opacity-25 h-14 pt-2.5 text-xl rounded-xl flex shadow-lg align-middle border-none bg-gray-100 bg-opacity-25 p-3 rounded font-bold transition duration-500 ease-in-out hover:bg-purple-300 hover:bg-opacity-50 transform hover:-translate-y-1 hover:scale-90 cursor-pointer ">
      <img
        src="https://img.icons8.com/fluent/48/000000/repository.png"
        alt="Error loading.."
        className="h-10 pr-4 pb-0.5"
      />
      <a
        href={repo.html_url}
        className="pt-0.5 text-gray-200 font-bold"
        target="_blank"
        rel="noreferrer"
      >
        {repo.name}
      </a>
    </div>
  );
};
export default RepoItem;
