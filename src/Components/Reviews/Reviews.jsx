import React from "react";

function Reviews({ review }) {
  console.log("sadkflkjsdflk review", review);

  return (
    <div>
      <div className="reviwes my-3">
        <div className="flex justify-start mb-1">
          <div className="avatar placeholder mr-2">
            <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
              <span className="text-xs">
                <img src={review.img} alt="" />
              </span>
            </div>
          </div>
          <p className="ml-2 text-xl font-bold">{review.name}</p>
        </div>
        <div>
          <div className="ml-5">
            <p className="text-lime-600">{review.review}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
