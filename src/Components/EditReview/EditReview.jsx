import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function EditReview() {
  const [storedReview, setstoredReview] = useState();
  const naviagate = useNavigate();

  const params = useParams();
  const { user } = useContext(AuthContext);

  const { register, handleSubmit, reset } = useForm();

  const handleReview = (data) => {
    const reviews = {
      name: user.displayName,
      img: user.photoURL,
      date: new Date(),
      review: data.review,
      email: storedReview.email,
      id: storedReview.id,
    };
    console.log("updated reviews", reviews);

    // put
    fetch(
      `https://back-end-side-9p6vzvbca-raihan115219.vercel.app/reviews/${storedReview._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(reviews),
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        if (data.acknowledged === true) {
          notify();
          reset();
        }
        naviagate("/review");
      })
      .catch((err) => console.log(err));
  };
  const notify = () => toast("Delet Success full");
  useEffect(() => {
    fetch(
      `https://back-end-side-9p6vzvbca-raihan115219.vercel.app/reviews/${params.id}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setstoredReview(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params]);

  return (
    <div>
      <div className="form-control w-full my-10">
        <div className="relative">
          <form action="" onSubmit={handleSubmit(handleReview)}>
            <input
              type="textarea"
              name="review"
              defaultValue={storedReview?.review}
              placeholder="Add your review"
              className="input input-bordered w-full pr-16"
              {...register("review", { required: true })}
            />
            <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
              Review
            </button>
          </form>
          <div>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditReview;
