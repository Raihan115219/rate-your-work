import React from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";

function BlogPage() {
  const questions = useLoaderData();
  return (
    <div>
      <Helmet>
        <title>Blog Page</title>
      </Helmet>
      <div className="card w-full bg-base-100 shadow-xl my-20 border-red-200">
        <div className="card-body border-4">
          {questions.map((qna) => {
            return (
              <div className="" key={qna._id}>
                <h1 className="text-5xl">{qna.question}</h1>
                <p className="p-6">{qna.answer}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default BlogPage;
