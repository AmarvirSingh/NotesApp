import React from "react";

export default function ErrorMessage({ message }) {
  return (
    <div>
      <h5 className="fs-6 mt-2" style={{ color: "red" }}>
        {" "}
        Error : {message}
      </h5>
    </div>
  );
}
