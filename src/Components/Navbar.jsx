/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import styles from "../Styles/Navbar.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { IoIosAdd, IoIosLogOut } from "react-icons/io";
import { MdOutlineLogout } from "react-icons/md";
import { AppContext } from "../AppContext";

export default function Navbar({
  title,
  showModal,
  setShowModal,
  displaynone,
  showAdd,
}) {
  const navigate = useNavigate();
  const { setUsername, setIsLogin } = useContext(AppContext);
  const handleLogout = () => {
    window.localStorage.clear();

    setUsername("");
    setIsLogin(false);
    navigate("/");
  };
  return (
    <nav className={styles.navbar}>
      <div className={styles.navLogo}>{title}</div>
      <div className="d-flex gap-3 align-items-center">
        <button
          style={{ display: `${displaynone}` }}
          className={styles.toggleButton}
          onClick={() => {
            setShowModal(!showModal);
          }}
        >
          <IoIosAdd color="white" size={30} />
        </button>

        <button className="btn btn-none" onClick={() => handleLogout()}>
          <IoIosLogOut color="white" size={30} />
        </button>
      </div>
    </nav>
  );
}
