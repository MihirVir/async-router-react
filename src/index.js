import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Nav from "./components/nav";
import delay from "./util/delay";
import { booksRoute } from "./components/books";
import { loader } from "./components/main-loader";

const Club = lazy(() => import("./components/club"));
const Main = lazy(() => delay(import("./components/main")), 1000);
const router = createBrowserRouter([
  {
    element: <Nav />,
    children: [
      { index: true, loader: loader, element: <Main /> },
      { path: "/books", ...booksRoute },
      { path: "/club", element: <Club /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
