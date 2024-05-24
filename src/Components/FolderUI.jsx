/* eslint-disable react/prop-types */

import { useContext } from "react";
import { FaFolderClosed } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../AppContext";
import axios from "axios";

export default function FolderUI({ folder }) {
  const title = folder.title;
  const id = folder._id;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/notes", { state: { title, id } });
  };
  return (
    <div onClick={() => handleClick()} className="container p-3  border-bottom">
      <div className="d-flex gap-3 align-items-center">
        <span className="fs-2">
          <FaFolderClosed />
        </span>
        <div className="fs-2">{folder.title}</div>
      </div>
    </div>
  );
}
