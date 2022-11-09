import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";
import MyReview from "../../Pages/My-Review/MyReview";
import ReviewForm from "../ReviewForm";
import Reviews from "../Reviews/Reviews";
import SingleDetails from "./SingleDetails";

function ServiceDetails() {
  const [review, setReviews] = useState([]);
  const [reviewAdded, setReviewAdded] = useState({});
  const signleData = useLoaderData();
  // console.log("produect id", signleData._id);

  useEffect(() => {
    fetch(`http://localhost:9000/reviews?id=${signleData._id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setReviews(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [reviewAdded, signleData._id]);

  const { user } = useContext(AuthContext);
  return (
    <div>
      <div class="grid lg:grid-cols-2 md:grid-cols-1 p-8 gap-24 container">
        <div>
          {/* details */}
          <SingleDetails signleData={signleData}></SingleDetails>
        </div>
        <div className=" w-96  p-5 h-80 overflow-auto overflow-x-hidden">
          <h1 className="text-center text-5xl p-3">Reviews</h1>
          {user ? (
            // reviews form
            <ReviewForm
              setReviewAdded={setReviewAdded}
              uniqueProductId={signleData._id}
            ></ReviewForm>
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
          {review.map((review, index) => {
            return <Reviews review={review} key={review._id}></Reviews>;
          })}
        </div>
      </div>
    </div>
  );
}

export default ServiceDetails;
