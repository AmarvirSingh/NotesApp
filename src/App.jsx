import "./App.css";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Login from "./Components/Login";

import Root from "./Components/Root";
import Signup from "./Components/Signup";
import Notes from "./Components/Notes";
import ErrorElement from "./Components/ErrorElement";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Login />} />
      <Route
        path="/signup"
        element={<Signup />}
        errorElement={<ErrorElement />}
      />
      <Route
        path="/folder"
        element={<Root />}
        errorElement={<ErrorElement />}
      />
      <Route
        path="/notes"
        element={<Notes />}
        errorElement={<ErrorElement />}
      />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
