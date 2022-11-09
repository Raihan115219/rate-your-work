import React from "react";
import { Link } from "react-router-dom";

function RecentSerivice({ recentService }) {
  console.log("recent service", recentService);
  return (
    <div>
      <div className="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 my-5">
        {recentService.map((recent, index) => {
          return (
            <div className="card w-96 bg-base-100 shadow-xl" key={recent.id}>
              <figure>
                <img src={recent.img} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{recent.name}</h2>
                <p>
                  {recent.desc.length >= 0
                    ? recent.desc.slice(0, 150)
                    : undefined}
                </p>
                <div className="card-actions w-full">
                  <Link to={`/service/${recent._id}`}>
                    <button className="btn btn-primary w-full">
                      Check Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="text-center">
        <Link to="/service">
          <button className="btn btn-primary">See All</button>
        </Link>
      </div>
    </div>
  );
}

export default RecentSerivice;
