import React from "react";

function MyInspirations() {
  return (
    <div>
      <div className="flex w-full my-10 gap-3">
        <div className="grid flex-grow card border-2 rounded-box place-items-center mb-3 p-5">
          <div>
            <div className="customer flex">
              <img
                src="https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg?w=2000"
                alt=""
                className="w-10 rounded-full"
              />
              <p className="ml-1 font-bold">Name</p>
            </div>
            <p>
              A customer review is a reflection of a customer's experience with
              your company's products or services. Reviews can be found on sites
              such as Google Reviews, Amazon, Yelp, and Facebook. Consumers use
              customer reviews during the buyer's journey to understand how your
              product works and whether it's worth the investment.
            </p>
          </div>
        </div>

        <div className="grid flex-grow card border-2 rounded-box place-items-center p-5">
          <div>
            <div className="customer flex">
              <img
                src="https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg?w=2000"
                alt=""
                className="w-10 rounded-full"
              />
              <p className="ml-1 font-bold">Name</p>
            </div>
            <p>
              A customer review is a reflection of a customer's experience with
              your company's products or services. Reviews can be found on sites
              such as Google Reviews, Amazon, Yelp, and Facebook. Consumers use
              customer reviews during the buyer's journey to understand how your
              product works and whether it's worth the investment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyInspirations;
