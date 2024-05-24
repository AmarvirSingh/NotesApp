/* eslint-disable no-unused-vars */
import React from "react";
import { useRef } from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../AppContext";
import { useEffect } from "react";

export default function Signup() {
  const username = useRef();
  const password = useRef();
  const navigate = useNavigate();
  const { setUsername, setIsLogin, setUserId, isLogin } =
    useContext(AppContext);
  const [message, setMessage] = useState(false);

  useEffect(() => {
    if (window.localStorage.getItem("user")) {
      console.log(window.localStorage.getItem("user"));
      navigate("/folder");
    }
  }, []);

  const handleRegister = async () => {
    const user = username.current.value;
    const pass = password.current.value;

    if (user === "" || pass === "") {
      return alert("username and password can not be empty ");
    }

    try {
      const response = await axios.post("http://localhost:3001/auth/register", {
        username: user,
        password: pass,
      });
      console.log(response);
      if (response.status === 200) {
        setIsLogin(true);
        setUsername(user);
        setUserId(response.user);

        window.localStorage.setItem("user", `${response.data.username}`);
        window.localStorage.setItem("userId", `${response.data.user}`);
        navigate("/folder");
      }
    } catch (err) {
      console.error("Error :-> ", err);
    }
  };

  return (
    <>
      <div className="container bg-primary-subtle rounded w-75 position-absolute top-50 start-50 translate-middle border border-primary border-3">
        <div className="my-3 ">
          <label htmlFor="exampleFormControlInput1" className="form-label mt-2">
            Username
          </label>
          <input
            type="email"
            ref={username}
            required
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="example-123"
          />
        </div>
        <div className="my-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            ref={password}
            required
            className="form-control"
            placeholder="Password"
            id="password"
            type="password"
          />
        </div>
        <div className="text-center mb-2">
          <button onClick={() => handleRegister()} className="btn btn-primary">
            Signup
          </button>
        </div>
        <div className="text-center mb-2">
          <Link
            to="/"
            className="text-decoration-none btn btn-outline-secondary mb-2 "
          >
            Login
          </Link>
        </div>
      </div>
    </>
  );
}
