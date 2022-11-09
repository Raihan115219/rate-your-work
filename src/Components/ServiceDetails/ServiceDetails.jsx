import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";
import MyReview from "../../Pages/My-Review/MyReview";
import ReviewForm from "../ReviewForm";
import Reviews from "../Reviews/Reviews";
import SingleDetails from "./SingleDetails";

function ServiceDetails() {
  const signleData = useLoaderData();
  console.log(signleData);

  const { user } = useContext(AuthContext);
  return (
    <div>
      <div class="grid lg:grid-cols-2 md:grid-cols-1 p-8 gap-24 container">
        <div>
          {/* details */}
          <SingleDetails signleData={signleData}></SingleDetails>
        </div>
        <div className="bg-red-100 w-96  p-5 max-h-fit overflow-auto overflow-x-hidden">
          <h1 className="text-center text-5xl p-3">Reviews</h1>
          {user ? (
            // reviews form
            <ReviewForm></ReviewForm>
          ) : (
            <h1>
              Please login first to Add review{" "}
              <Link to="/login">
                <button className="btn btn-ghost">login</button>
              </Link>
            </h1>
          )}
          <div className="w-full h-1 bg-black my-5"></div>
          {/* reviews */}
          {signleData.reviews.map((item) => {
            return <Reviews review={item}></Reviews>;
          })}
        </div>
      </div>
    </div>
  );
}

export default ServiceDetails;
