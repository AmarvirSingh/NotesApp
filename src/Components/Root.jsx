import Navbar from "./Navbar";
import FolderUI from "./FolderUI";
import FolderModal from "./FolderModal";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { AppContext } from "../AppContext";
import axios from "axios";
import { useLoaderData, useNavigate } from "react-router-dom";
import LoadingLine from "./LoadingLine";

export default function Root() {
  const [showModal, setShowModal] = useState(false);
  const [updateFolder, setUpdateFolder] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const username = window.localStorage.getItem("user");

  async function fetchData() {
    setLoading(true);
    const userId = window.localStorage.getItem("userId");
    const newdata = await axios.post(
      `${import.meta.env.VITE_HOST_NAME}/addFolder/getAllFolders`,
      {
        userId: userId,
      }
    );

    const newArray = newdata.data.folderNames;

    newArray.forEach((element) => {
      setData((oldData) => [element, ...oldData]);
    });
    setLoading(false);
  }

  useEffect(() => {
    const userLogin = window.localStorage.getItem("user");
    if (!userLogin) {
      return navigate("/");
    }

    fetchData();

    return () => {
      setData([]);
    };
  }, [updateFolder]);

  return (
    <>
      <Navbar
        title={`Notes Lelo (${username})`}
        setShowModal={setShowModal}
        showAdd={true}
      />
      {loading && <LoadingSpinner />}

      {showModal && (
        <FolderModal
          showModal={showModal}
          setShowModal={setShowModal}
          updateFolder={updateFolder}
          setUpdateFolder={setUpdateFolder}
        />
      )}
      {!showModal && data?.length() > 0 ? (
        data.map((d, id) => <FolderUI key={id} folder={d} />)
      ) : (
        <p>No Folder right now </p>
      )}
    </>
  );
}

function LoadingSpinner() {
  return (
    <div class="spinner-border spinner-border-sm" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  );
}
