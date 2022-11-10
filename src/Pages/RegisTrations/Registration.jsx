import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../contexts/UserContext";
import { Helmet } from "react-helmet-async";

function Registration() {
  const { register, handleSubmit, reset } = useForm();
  const { userCreate, user, googleLogin, updateUserProfile } =
    useContext(AuthContext);
  const location = useLocation();
  let from = location.state?.from?.pathname || "/home";

  const Navigate = useNavigate();
  const handleRegistration = (data) => {
    console.log("this is from data regi", data.photoURL);
    const name = data.name;
    const photoURL = data.photoURL;

    userCreate(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        handleUpdatedProfile(name, photoURL);
        Navigate(from, { replace: true });
        reset();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // profile update fucntons
  const handleUpdatedProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    updateUserProfile(profile);
  };

  return (
    <div>
      <Helmet>
        <title>Registraiton page</title>
      </Helmet>
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
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    {...register("password", { required: true })}
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Sign UP</button>
                </div>
                <div className="form-control mt-6">
                  <button onClick={googleLogin} className="btn btn-primary">
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
