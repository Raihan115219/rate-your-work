import React from "react";

function ReviewForm() {
  return (
    <div>
      <div class="flex justify-between">
        <div>
          <div className="avatar placeholder mr-2 mt-2">
            <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
              <span className="text-xs">AA</span>
            </div>
          </div>
        </div>
        <div className="form-control w-80">
          <div className="relative">
            <input
              type="text"
              placeholder="username@site.com"
              className="input input-bordered w-full pr-16"
            />
            <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
              Review
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewForm;
