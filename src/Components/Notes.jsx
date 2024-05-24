import React, { useContext, useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import { useLocation, useNavigate, useNavigation } from "react-router-dom";
import { FaCheck } from "react-icons/fa6";
import axios from "axios";
import { AppContext } from "../AppContext";
import LoadingLine from "./LoadingLine";

export default function Notes(props) {
  const location = useLocation();
  const task = useRef();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  //const { data, setData } = useContext(AppContext);

  useEffect(() => {
    const userLogin = window.localStorage.getItem("user");
    if (!userLogin) {
      return navigate("/");
    }
    fecthTasks();
  }, []);

  const fecthTasks = async () => {
    setLoading(true);
    const taskData = await axios.post(
      "http://localhost:3001/addTasks/getTasks",
      { folderId: location.state.id }
    );
    const newArray = taskData.data.tasks;

    setData([]);
    newArray.forEach((element) => {
      setData((oldData) => [element, ...oldData]);
    });
    setLoading(false);
  };

  const handleAddTask = async () => {
    const title = task.current.value;
    setLoading(true);
    await axios.post("http://localhost:3001/addTasks", {
      taskName: title,
      folderId: location.state.id,
    });
    fecthTasks();
    setLoading(false);
    task.current.value = "";
  };

  const handleDone = async (index) => {
    setLoading(true);
    const response = await axios.post("http://localhost:3001/addTasks/delete", {
      noteId: index,
    });
    if (response.status === 201) {
      fecthTasks();
    }
    setLoading(false);
    //setData(newData);
  };

  return (
    <>
      <Navbar
        title={
          location.state.title !== null
            ? location.state.title
            : navigate("/folder")
        }
        displaynone="none"
        showAdd={false}
      />
      {loading && <LoadingLine />}

      <div
        className="d-flex justify-content-around  gap-3 w-75  text-center m-3 mx-auto"
        style={{}}
      >
        <input
          type="text"
          ref={task}
          className="form-control rounded-start"
          placeholder="enter here"
        />

        <button
          className="btn btn-outline-primary "
          type="button"
          id="button-addon2"
          onClick={() => handleAddTask()}
        >
          Add
        </button>
      </div>

      {data.map((t) => (
        <div className={`card m-3 `} key={t._id}>
          <div
            className={`card-body p-3 d-flex align-items-center justify-content-between fw-bold`}
          >
            {t.name}
            <div>
              <button
                onClick={() => handleDone(t._id)}
                className="btn btn-outline-danger rounded"
              >
                <FaCheck />
              </button>
            </div>
          </div>
        </div>
      ))}

      {/*data.map((d) =>
        d.id === location.state.id
          ? d.tasks.map((t) => (
              <div className={`card m-3 `} key={t.id}>
                <div
                  className={`card-body p-3 d-flex align-items-center justify-content-between fw-bold`}
                >
                  {t.name}
                  <div>
                    <button
                      onClick={() => handleDone(t.id)}
                      className="btn btn-outline-danger rounded"
                    >
                      <FaCheck />
                    </button>
                  </div>
                </div>
              </div>
            ))
          : ""
      )*/}
    </>
  );
}
