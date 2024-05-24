/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { useContext } from "react";
import Context, { AppContext } from "../AppContext";

import { useRef } from "react";
import axios from "axios";

export default function FolderModal({
  showModal,
  setShowModal,
  updateFolder,
  setUpdateFolder,
}) {
  //const { data, setData, userId } = useContext(AppContext);

  const folderName = useRef();
  const handleAddFolder = async () => {
    const name = folderName.current.value;
    const userId = window.localStorage.getItem("userId");

    await axios.post("http://localhost:3001/addFolder/", {
      folderName: name,
      userId: userId,
    });
    /*
    setData([
      ...data,
      { id: Math.random().toString(34).slice(2, 5), title: name, tasks: [] },
    ]);*/
    setShowModal(false);
    setUpdateFolder(!updateFolder);
  };

  return (
    <>
      {showModal && (
        <div
          style={{
            backgroundColor: "#f1f1f1",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            className="bg-secondary border rounded m-3"
            style={{ width: "85vw" }}
          >
            <div className="container p-3 ">
              <div className="text-center my-5 ">
                <h1 className="text-white">Add Folder</h1>
              </div>
              <div className="text-white mb-5">
                <input
                  className="w-100  border-0 rounded p-2"
                  placeholder="Enter Folder Name"
                  ref={folderName}
                />
              </div>
              <div className=" mb-5 d-flex justify-content-around">
                {" "}
                <button
                  className=" btn btn-primary px-4  btn-lg"
                  onClick={() => handleAddFolder()}
                >
                  Add
                </button>
                <button
                  className=" btn btn-secondary   btn-lg"
                  onClick={() => {
                    setShowModal(false);
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
