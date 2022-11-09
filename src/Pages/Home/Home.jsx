import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner";
import MyInspirations from "../../Components/MyInspirations/MyInspirations";
import MySuccess from "../../Components/MySuccess/MySuccess";
import RecentSerivice from "../../Components/RecentService/RecentSerivice";
import { AuthContext } from "../../contexts/UserContext";

function Home() {
  const recentService = useLoaderData();
  console.log("limit data", recentService);
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div>
      <div className="mb-3">
        <Banner></Banner>
      </div>
      <div>
        <div className="flex justify-center mt-20">
          <div className="text-center">
            <h1 className="text-6xl font-bold underline underline-offset-8 pb-4">
              My Recent Service
            </h1>
            <div className="flex justify-center">
              <p className=" text-center py-3 text-xl text-gray-500">
                My Work, My Pleasure.
              </p>
            </div>
          </div>
        </div>
        <RecentSerivice recentService={recentService}></RecentSerivice>
      </div>
      <div>
        <div className="flex justify-center mt-10">
          <div className="flex justify-center mt-20">
            <div className="text-center">
              <h1 className="text-6xl font-bold underline underline-offset-8 pb-4">
                My Motivations
              </h1>
              <div className="flex justify-center">
                <p className=" text-center py-3 text-xl text-gray-500">
                  My motivations keeps me uper...
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* My inspiration */}
        <MyInspirations></MyInspirations>
      </div>
      <div>
        <div className="flex justify-center mt-20">
          <div className="text-center">
            <h1 className="text-6xl font-bold underline underline-offset-8 pb-4">
              My Ratio
            </h1>
            <div className="flex justify-center">
              <p className=" text-center py-3 text-xl text-gray-500">
                This things makes me more proude
              </p>
            </div>
          </div>
        </div>
        {/* my Succes */}
        <div className="text-center">
          <MySuccess></MySuccess>
        </div>
      </div>
    </div>
  );
}

export default Home;
