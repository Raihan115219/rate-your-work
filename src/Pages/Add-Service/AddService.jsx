import React from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddService() {
  const { register, handleSubmit, reset } = useForm();

  const handleAddService = (data) => {
    const service = {
      name: data.name,
      desc: data.description,
      img: data.productImage,
      rating: data.putRatting,
      price: data.Price,
      time: new Date(),
    };

    fetch("https://back-end-side-9p6vzvbca-raihan115219.vercel.app/service", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(service),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.acknowledged === true) {
          notify();
          console.log(data);
        }
      });

    console.log(service);
    reset();
  };
  // notifications
  const notify = () => toast("Service added Success full");
  return (
    <div>
      <Helmet>
        <title>Add Service</title>
      </Helmet>
      <div className="hero my-10">
        <div className="hero-content">
          <div className="card w-full shadow-2xl border-4 bg-base-100">
            <div className="card-body">
              <form action="" onSubmit={handleSubmit(handleAddService)}>
                <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-3">
                  <div className="form-control ">
                    <label className="label">
                      <span className="label-text">Service Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Product name"
                      className="input input-bordered"
                      {...register("name", { required: true })}
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">
                        Insert your Product image link here
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="image link"
                      className="input input-bordered"
                      {...register("productImage", { required: true })}
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Put your Rating</span>
                    </label>
                    <input
                      type="text"
                      placeholder="put ratting"
                      className="input input-bordered"
                      {...register("putRatting", { required: true })}
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Price</span>
                    </label>
                    <input
                      type="text"
                      placeholder="insert price"
                      className="input input-bordered"
                      {...register("Price", { required: true })}
                    />
                  </div>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Product Descriptions</span>
                  </label>
                  <textarea
                    className="textarea textarea-bordered"
                    placeholder="ProductDescriptions"
                    {...register("description", { required: true })}
                  ></textarea>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Add Service</button>
                </div>
              </form>
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddService;
