import React, { useState } from "react";
import Profile from "./profile";

const SearchUser = () => {
    const [data, setData] = useState({});
    const [username, setUsername] = useState("");
    const [repositories, setRepositories] = useState([]);
  
    const onChangeHandler = e => {
      setUsername(e.target.value);
    };
  
    const submitHandler = async e => {
      e.preventDefault();
  
      const profile = await fetch(`https://api.github.com/users/${username}`);
      const profileJson = await profile.json();
      // console.log(profileJson);
  
      const repositories = await fetch(profileJson.repos_url);
      const repoJson = await repositories.json();
      console.log(repoJson);
  
      if (profileJson) {
        setData(profileJson);
        setRepositories(repoJson);
      }
    };
  return (
    <>
      <div className="flex justify-center">
        <div className="round-lx w-3/4 text-center">
          <header className="py-3 px-8 text-3xl font-bold "> 
            Git UserName
          </header>
          <div className="p-8 grid justify-items-center items-baseline">
            <input
              className="prompt w-60 mb-4 rounded-md px-3 py-2 border-4 border-green-500/50 outline-none"
              placeholder="search username"
              type="text"
              value={username}
              id="w"
              onChange={onChangeHandler}
            />
            <button
              type="submit"
              onClick={submitHandler}
              className="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-green-500 rounded-lg group"
            >
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out  bg-gray-800 rounded-xl group-hover:w-56 group-hover:h-56"></span>
              <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
              <span className="relative">Submit</span>
            </button>
            <Profile data={data} repositories={repositories} />
          </div>
        </div>
      </div>
      
    </>
  );
};

export default SearchUser;

// text-white
