import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Link, useLoaderData } from "react-router-dom";

function Service() {
  const service = useLoaderData();

  // console.log(service.desc.slice(0, 10));
  // console.log(service);

  return (
    <div>
      <div>
        <h1>my Serivcess</h1>
        <div>
          <div className="grid grid-cols-2 gap-5 my-5">
            {service.map((serviceItem, index) => {
              return (
                <div
                  className="card w-full  bg-base-100 shadow-xl mb-3"
                  key={serviceItem.id}
                >
                  <figure>
                    <PhotoProvider>
                      <PhotoView src={serviceItem.img}>
                        <img src={serviceItem.img} alt="Shoes" />
                      </PhotoView>
                    </PhotoProvider>
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{serviceItem.name}</h2>
                    <div className="card-actions justify-end">
                      <div className="badge badge-outline">
                        Price:{serviceItem.price}
                      </div>
                    </div>
                    <p>{serviceItem.desc}</p>
                    {/* <p>{serviceItem.desc}</p> */}
                    {/* <p>{console.log(typeof serviceItem.desc)}</p> */}
                    <Link to={`/service/${serviceItem._id}`}>
                      <button className="btn btn-primary w-full">
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
