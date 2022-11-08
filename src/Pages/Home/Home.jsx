import React from "react";
import Banner from "../../Components/Banner";
import RecentSerivice from "../../Components/RecentService/RecentSerivice";

function Home() {
  return (
    <div>
      <div className="mb-3">
        <Banner></Banner>
      </div>
      <div>
        <RecentSerivice></RecentSerivice>
      </div>
      <div className="text-center">
        <h1 className="text-5xl underline-offset-4">Inspirations</h1>
      </div>
      <div className="text-center">
        <h1 className="text-5xl underline-offset-4">I Have done</h1>
      </div>
    </div>
  );
}

export default Home;
