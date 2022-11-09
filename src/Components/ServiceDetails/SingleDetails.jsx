import React from "react";

function SingleDetails() {
  return (
    <div>
      <div className="card  w-full bg-base-100 border-4">
        <figure className="w-full p-5">
          <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Price: 45$</div>
            <div className="badge badge-outline">Price: 45$</div>
            <div className="badge badge-outline">Price: 45$</div>
          </div>
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
      </div>
    </div>
  );
}

export default SingleDetails;
