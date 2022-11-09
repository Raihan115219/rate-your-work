import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Link } from "react-router-dom";

function Service() {
  return (
    <div>
      <div>
        <h1>my Serivcess</h1>
        <div>
          <div className="grid grid-cols-3 my-5">
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <PhotoProvider>
                  <PhotoView src="https://placeimg.com/400/225/arch">
                    <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
                  </PhotoView>
                </PhotoProvider>
              </figure>
              <div className="card-body">
                <h2 className="card-title">Name</h2>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">Price: 45$</div>
                </div>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <Link to="/service/5">
                  <button className="btn btn-primary w-full">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
