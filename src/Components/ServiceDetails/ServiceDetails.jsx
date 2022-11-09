import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";
import ReviewForm from "../ReviewForm";
import Reviews from "../Reviews/Reviews";
import SingleDetails from "./SingleDetails";

function ServiceDetails() {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <div class="grid lg:grid-cols-2 md:grid-cols-1 p-8 gap-24 container">
        <div>
          {/* details */}
          <SingleDetails></SingleDetails>
        </div>
        <div className="bg-red-100 w-96  p-5">
          <h1 className="text-center text-5xl p-3">Reviews</h1>
          {user ? (
            // reviews form
            <ReviewForm></ReviewForm>
          ) : (
            <h1>
              Please login first to Add review <Link to="/login">login</Link>
            </h1>
          )}
          <div className="w-full h-1 bg-black my-5"></div>
          {/* reviews */}
          <Reviews></Reviews>
          <Reviews></Reviews>
          <Reviews></Reviews>
        </div>
      </div>
    </div>
  );
}

export default ServiceDetails;
