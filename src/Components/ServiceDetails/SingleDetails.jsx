import React from "react";

function SingleDetails({ signleData }) {
  console.log("signle data", signleData);
  return (
    <div>
      <div className="card  w-full bg-base-100 border-4">
        <figure className="w-full p-5">
          <img src={signleData.img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Price: {signleData.price}</div>
            <div className="badge badge-outline">
              Rating: {signleData.rating}
            </div>
          </div>
          <h2 className="card-title">{signleData.name}</h2>
          <p>{signleData.desc}</p>
        </div>
      </div>
    </div>
  );
}

export default SingleDetails;
