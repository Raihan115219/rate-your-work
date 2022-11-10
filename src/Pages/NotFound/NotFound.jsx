import React from "react";
import { Helmet } from "react-helmet-async";

function NotFound() {
  return (
    <div>
      <Helmet>
        <title>Not found</title>
      </Helmet>
      <h1 className="text-center text-9xl">Page Not found</h1>
    </div>
  );
}

export default NotFound;
