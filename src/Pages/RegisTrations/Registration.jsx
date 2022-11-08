import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Registration() {
  const { register, handleSubmit } = useForm();
  const handleRegistration = (data) => {
    console.log(data);
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200 my-5">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Registerd now!</h1>
            <p className="py-6">
              Login gives you more features and access to this site...
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form action="" onSubmit={handleSubmit(handleRegistration)}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name here"
                    className="input input-bordered"
                    {...register("name", { required: true })}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    className="input input-bordered"
                    {...register("email", { required: true })}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo url</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Photo url"
                    className="input input-bordered"
                    {...register("photoURL", { required: true })}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="text"
                    placeholder="password"
                    className="input input-bordered"
                    {...register("password", { required: true })}
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Sign UP</button>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">
                    Sign up with google
                  </button>
                </div>
                <label className="label">
                  <Link to="/login">sign-in__ if you have account!</Link>
                </label>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
