import React, { useContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../contexts/UserContext";

function MyReview() {
  const [usersReview, setUserReview] = useState(null);
  const { user, userSignOut } = useContext(AuthContext);
  console.log("is everythisi here ornot", usersReview);

  // delet review
  const handleDeletReview = (_id) => {
    const areYouSure = window.confirm("are your sure to delet");
    if (areYouSure) {
      fetch(`http://localhost:9000/reviews/${_id}`, {
        method: "Delete",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            notify();
            const remainReview = usersReview.filter((rev) => rev._id !== _id);
            setUserReview(remainReview);
          }
        })
        .catch((err) => console.log(err));
    }
  };
  const notify = () => toast("Delet Success full");
  // api call
  useEffect(() => {
    fetch(`http://localhost:9000/review?email=${user.email}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUserReview(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user.email, userSignOut]);

  return (
    <div>
      <div className="overflow-x-auto my-10">
        <table className="table table-zebra w-full text-center">
          {/* <!-- head --> */}
          <thead className="text-center">
            <tr>
              <th>sl</th>
              <th>Service ID</th>
              <th>Review</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            {usersReview === null ? (
              <div>
                <h1 className="text-xl">You had not reviewed any one...</h1>
              </div>
            ) : (
              usersReview?.map((review, index) => {
                return (
                  <tr key={review._id}>
                    <th>{index + 1}</th>
                    <td>{review.id}</td>
                    <td>{review.review}</td>
                    <td>
                      <button className="btn btn-primary mr-2 ">Edit</button>
                      <button
                        className="btn-error btn"
                        onClick={() => handleDeletReview(review._id)}
                      >
                        Delet
                      </button>
                    </td>
                  </tr>
                );
              })
            )}

            {/* <!-- row 2 --> */}
          </tbody>
        </table>
        {/* The button to open modal */}
        {/* toast */}
        <div>
          <ToastContainer />
        </div>
        {/* tpast */}
      </div>
    </div>
  );
}

export default MyReview;
