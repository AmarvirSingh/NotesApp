import { Link, Navigate, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useContext, useState } from "react";
import { AppContext } from "../AppContext";
import { useRef } from "react";
import { useEffect } from "react";
import ErrorMessage from "./ErrorMessage";
import { MdWindPower } from "react-icons/md";

export default function Login() {
  const { isLogin, setIsLogin, setUsername, setUserId } =
    useContext(AppContext);
  const [errorMessage, setErrorMessage] = useState(false);
  const [Message, setMessage] = useState("");
  const navigate = useNavigate();
  const username = useRef();
  const password = useRef();

  useEffect(() => {
    const savedUser = window.localStorage.getItem("user");
    if (savedUser) {
      setIsLogin(true);
      setUsername(savedUser);
      setUserId(window.localStorage.getItem("userId"));
      navigate("/folder");
    }
  }, []);

  const handleLogin = async () => {
    const user = username.current.value;
    const pass = password.current.value;

    if (user == "" || password == "") {
      return alert("UserName and Password cAnnot be empty !!!");
    }

    const data = await axios.post(
      `${import.meta.env.VITE_HOST_NAME}/auth/login`,
      {
        username: user,
        password: pass,
      }
    );

    if (data.status === 201) {
      setErrorMessage(true);
      setMessage("Password doesnot match the records");
      return;
    }

    if (data.status === 203) {
      setErrorMessage(true);
      setMessage("User Doesnot Exist");
      return;
    }
    //console.log(data);
    if (data.status === 202) {
      // sending status code 202 on successfull login  from backend

      setIsLogin(true);
      setUsername(data.data.username);
      setUserId(data.data.userId);

      window.localStorage.setItem("user", `${data.data.username}`);
      window.localStorage.setItem("userId", `${data.data.userId}`);

      navigate("/folder");
    }
  };

  return (
    <>
      {isLogin ? (
        navigate("/folder")
      ) : (
        <div className="container bg-primary-subtle rounded w-75 position-absolute top-50 start-50 translate-middle border border-primary border-3">
          {errorMessage && <ErrorMessage message={Message} />}
          <div className="my-3 ">
            <label
              htmlFor="exampleFormControlInput1"
              className="form-label mt-2"
            >
              Username
            </label>
            <input
              type="email"
              ref={username}
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
              className="form-control"
              placeholder="Password"
              id="password"
              type="password"
            />
          </div>
          <div className="text-center mb-2">
            <button onClick={() => handleLogin()} className="btn btn-primary">
              Sign IN
            </button>
          </div>
          <div className="text-center mb-2">
            <Link
              to="/signup"
              className="text-decoration-none btn btn-outline-secondary mb-2 "
            >
              Signup
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
