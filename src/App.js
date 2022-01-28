import React from "react";
import GradientBackGround from "./components/gradientbg";

const App = () => {
  return (
    <div className="min-h-screen bg-[#000000f3] selection:text-white selection:bg-lime-500/90 antialiased">
      <div className="relative z-10 w-full mx-auto sm:max-w-screen-sm">
        <GradientBackGround />
      </div>
      <div className="relative z-10 w-full px-4 pt-48 mx-auto sm:max-w-screen-sm pb-500">
        <h1 className="text-3xl font-bold underline text-white">hello</h1>
      </div>
    </div>
  );
};

export default App;
