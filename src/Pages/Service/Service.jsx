import React, { useEffect, useState } from "react";
import { Audio } from "react-loader-spinner";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Link } from "react-router-dom";

function Service() {
  const [services, setService] = useState([]);
  const [serviceLoading, setServiceLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:9000/service")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setServiceLoading(true);
        setService(data);
        setServiceLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div>
        <div className="flex justify-center mt-10">
          <div className="flex justify-center mt-10">
            <div className="text-center">
              <h1 className="text-6xl font-bold underline underline-offset-8 pb-4">
                All Service
              </h1>
            </div>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-2 gap-5 my-5">
            {serviceLoading ? (
              <div className="text-center">
                <Audio
                  height="100"
                  width="100"
                  color="#4fa94d"
                  ariaLabel="audio-loading"
                  wrapperStyle={{}}
                  wrapperClass="wrapper-class"
                  visible={true}
                />
              </div>
            ) : (
              services.map((serviceItem, index) => {
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
                      <p>
                        {serviceItem.desc.length >= 0
                          ? ("...", serviceItem.desc.slice(0, 90))
                          : undefined}
                      </p>
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
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
