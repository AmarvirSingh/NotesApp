import React from "react";
import { useNavigate } from "react-router-dom";

export default function ErrorElement() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#f1f1f1",
      }}
    >
      <div className="d-block text-center">
        <h5 className="font-monospace">Something bad happens</h5>
        <button
          className="btn btn-outline-info font-monospace"
          onClick={() => navigate("/")}
        >
          Get Back To SignIn
        </button>
      </div>
    </div>
  );
}
