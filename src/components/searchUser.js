import React, { useState } from "react";

const SearchUser = () => {
  const [userName, setUserName] = useState("");
  const [data, setData] = useState({});

  const onChangeHandler = (e) => {
    setUserName(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    fetch(`https://api.github.com/users/${userName}`)
      .then((response) => {
        return response.json();
      })
      .then((originalData) => {
        if (originalData) {
          setData(originalData);
        }
      });
  };

  return (
    // <div className="flex justify-center">
    //     <header className="text-3xl font-bold text-white">Git user</header>
    //   <div className="flex justify-between items-baseline">

    // <input
    //   className="prompt w-60 ml-8 rounded-md px-3 py-2 border-4 border-green-500/50 outline-none"
    //   placeholder="search username"
    //   type="text"
    //   value={userName}
    //   id="w"
    //   onChange={onChangeHandler}
    // />
    //     <button class="bg-green-500 ml-4 text-white py-2 px-6 rounded-lg">
    //       Submit
    //     </button>
    //   </div>
    // </div>
    <div className="flex justify-center">
      <div className="round-lx w-3/4 text-center">
        <header className="py-3 px-8 text-3xl font-bold text-white">
          Git user
        </header>
        <div className="p-8 grid justify-items-center items-baseline">
          <input
            className="prompt w-60  rounded-md px-3 py-2 border-4 border-green-500/50 outline-none"
            placeholder="search username"
            type="text"
            value={userName}
            id="w"
            onChange={onChangeHandler}
          />
          <button class="bg-green-500 text-white py-2 px-6 rounded-lg mt-4 transition delay-300 duration-300 ease-in-out">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchUser;
