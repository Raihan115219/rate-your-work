import { registerVersion } from "firebase/app";
import React, { useContext } from "react";
import { AuthContext } from "../contexts/UserContext";
import { useForm } from "react-hook-form";

function ReviewForm({ setReviewAdded, uniqueProductId }) {
  const { user } = useContext(AuthContext);
  console.log("real user alada product id", uniqueProductId);
  const { register, handleSubmit, reset } = useForm();

  const handleReview = (data) => {
    const reviews = {
      name: user.displayName,
      img: user.photoURL,
      date: new Date(),
      review: data.review,
      email: user.email,
      id: uniqueProductId,
    };
    console.log("this will be the info", reviews);
    fetch("https://back-end-side-9p6vzvbca-raihan115219.vercel.app/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reviews),
    })
      .then((response) => response.json())
      .then((data) => setReviewAdded(data));
    reset();
  };

  return (
    <div>
      <div class="flex justify-between">
        <div>
          <div className="avatar placeholder mr-2 mt-2">
            <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
              <span className="text-xs">
                <img src={user.photoURL} alt="" />
              </span>
            </div>
          </div>
        </div>
        <div className="form-control w-80">
          <div className="relative">
            <form action="" onSubmit={handleSubmit(handleReview)}>
              <input
                type="text"
                name="review"
                placeholder="Add your review"
                className="input input-bordered w-full pr-16"
                {...register("review", { required: true })}
              />
              <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
                Review
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewForm;
