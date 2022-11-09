import React from "react";

function MyReview() {
  return (
    <div>
      <div className="overflow-x-auto my-10">
        <table className="table table-zebra w-full text-center">
          {/* <!-- head --> */}
          <thead className="text-center">
            <tr>
              <th>sl</th>
              <th>Service Name</th>
              <th>Review</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>
                <button className="btn btn-primary mr-2 ">Edit</button>
                <button className="btn-error btn">Delet</button>
              </td>
            </tr>
            {/* <!-- row 2 --> */}
          </tbody>
        </table>
        {/* The button to open modal */}
      </div>
    </div>
  );
}

export default MyReview;
