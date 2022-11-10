import React, { useContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../contexts/UserContext";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function MyReview() {
  const [usersReview, setUserReview] = useState(null);
  const { user, userSignOut } = useContext(AuthContext);
  console.log("is everythisi here ornot", usersReview);

  // delet review
  const handleDeletReview = (_id) => {
    const areYouSure = window.confirm("are your sure to delet");
    if (areYouSure) {
      fetch(
        `https://back-end-side-9p6vzvbca-raihan115219.vercel.app/reviews/${_id}`,
        {
          method: "Delete",
        }
      )
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
    fetch(
      `https://back-end-side-9p6vzvbca-raihan115219.vercel.app/review?email=${user.email}`
    )
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
      <Helmet>
        <title>My Review Page</title>
      </Helmet>
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
            {usersReview?.length === 0 ? (
              <div>
                <h1 className="text-xl">You had not reviewed any one...</h1>
              </div>
            ) : (
              usersReview?.map((review, index) => {
                return (
                  <tr key={review._id}>
                    <th>{index + 1}</th>
                    <td>{review._id}</td>
                    <td>{review.review}</td>
                    <td>
                      <Link to={`/update/${review._id}`}>
                        <button className="btn btn-primary mr-2 ">Edit</button>
                      </Link>
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
        {/* <Modal
          isOpen={modalIsopen}
          style={{
            overlay: {
              backgroundColor: "gray",
              position: "absolute",
              left: "200px",
              right: "100px",
            },
          }}
          shouldCloseOnOverlayClick={true}
        >
          <button
            className="btn btn-error text-end"
            onClick={() => setModalIsopen(false)}
          >
            Close
          </button>
          <div className="flex justify-center"></div>
        </Modal> */}
        {/* tpast */}
      </div>
    </div>
  );
}

export default MyReview;
