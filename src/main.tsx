import { RelayEnvironmentProvider } from "react-relay";
import { RelayEnvironment } from "./RelayEnvironment";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "./page/SignUp";
import SignIn from "./page/SignIn";
import "../src/index.css";
import EditUser from "./page/EditUser";

const router = createBrowserRouter([
  {
    path: "/users/sign_in",
    element: <SignIn />,
  },
  {
    path: "/users/sign_up",
    element: <SignUp />,
  },
  {
    path: "/users/edit",
    element: <EditUser />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RelayEnvironmentProvider environment={RelayEnvironment}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </RelayEnvironmentProvider>
);
