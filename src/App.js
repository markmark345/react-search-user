import React from "react";
import GradientBackGround from "./components/gradientbg";
import SearchUser from "./components/searchUser";

const App = () => {
  return (
    <div className="min-h-screen  selection:text-white selection:bg-lime-500/90 antialiased">
      <div className="relative z-10 w-full mx-auto sm:max-w-screen-sm">
        {/* <GradientBackGround /> */}
      </div>
      <div className="relative z-10 w-full px-4 pt-48 mx-auto sm:max-w-screen-lg pb-500 ">
        <div className="items-center ">
          <SearchUser />
        </div>
      </div>
    </div>
  );
};

export default App;
//bg-[#000000f3]