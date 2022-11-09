import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";

function Login() {
  const { register, handleSubmit } = useForm();
  const { userLogin, user } = useContext(AuthContext);
  // console.log("current user", user);
  const location = useLocation();
  let from = location.state?.from?.pathname || "/home";

  const Navigate = useNavigate();

  const handleLogin = (data) => {
    const email = data.email;
    const password = data.password;
    userLogin(email, password)
      .then((result) => {
        // console.log(result.user);
        Navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200 my-5">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <h1>{user?.email}</h1>
            <p className="py-6">
              Login gives you more features and access to this site...
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form action="" onSubmit={handleSubmit(handleLogin)}>
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
                  <button className="btn btn-primary">Login</button>
                </div>
                <label className="label">
                  <Link to="/sign-up">sign-up__ if you dont have account!</Link>
                </label>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
