import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/UserContext";

function MyReview() {
  const [usersReview, setUserReview] = useState();
  const { user } = useContext(AuthContext);
  console.log(usersReview);

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
  }, [user.email]);

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
            {usersReview?.map((review, index) => {
              return (
                <tr key={review._id}>
                  <th>{index + 1}</th>
                  <td>{review.id}</td>
                  <td>{review.review}</td>
                  <td>
                    <button className="btn btn-primary mr-2 ">Edit</button>
                    <button className="btn-error btn">Delet</button>
                  </td>
                </tr>
              );
            })}
            {/* <!-- row 2 --> */}
          </tbody>
        </table>
        {/* The button to open modal */}
      </div>
    </div>
  );
}

export default MyReview;
