/* eslint-disable react/prop-types */
import { createContext } from "react";
import fakeData from "./folderData.json";
import { useState } from "react";

export const AppContext = createContext();

const Context = ({ children }) => {
  const [data, setData] = useState(fakeData);
  const [isLogin, setIsLogin] = useState(false);
  const [userName, setUsername] = useState("guest");
  const [userId, setUserId] = useState("");
  const [folderId, setFolderId] = useState("");
  const [taskId, setTaskId] = useState("");

  return (
    <AppContext.Provider
      value={{
        data,
        setData,
        isLogin,
        setIsLogin,
        userName,
        setUsername,
        userId,
        setUserId,
        folderId,
        setFolderId,
        taskId,
        setTaskId,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default Context;
