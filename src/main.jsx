import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root/Root.jsx";
import ErrorPage from "./Components/Error Page/ErrorPage.jsx";
import Home from "./Components/Home/Home.jsx";
import ListedBooks from "./Components/Listed Books/ListedBooks.jsx";
import PagesToRead from "./Components/Pages To Read/PagesToRead.jsx";
import BookDetails from "./Components/BookDetails/BookDetails.jsx";
import ReadBooks from "./Components/Read Books/ReadBooks.jsx";
import Wishlist from "./Components/WishList/Wishlist.jsx";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/app",
        element: <App></App>,
      },
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/listedbooks",
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch(`/books.json`),
        children: [
          {
            index: true,
            element: <ReadBooks></ReadBooks>,
            loader: () => fetch(`/books.json`),
          },
          {
            path: "wishlist",
            element: <Wishlist></Wishlist>,
            loader: () => fetch(`/books.json`),
          },
        ],
      },
      {
        path: "/pagestoread",
        element: <PagesToRead></PagesToRead>,
        loader: () => fetch(`/books.json`),
      },
      {
        path: "/bookdetails/:bookId",
        element: <BookDetails></BookDetails>,
        loader: () => fetch(`../books.json`),
      },
      {
        path: "/about",
        element
      }
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
