import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import ErrorPage from './Components/Error Page/ErrorPage.jsx';
import Home from './Components/Home/Home.jsx';
import ListedBooks from './Components/Listed Books/ListedBooks.jsx';
import PagesToRead from './Components/Pages To Read/PagesToRead.jsx';
import BookDetails from './Components/BookDetails/BookDetails.jsx';
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
        element: <ListedBooks></ListedBooks>
      },
      {
        path: "/pagestoread",
        element: <PagesToRead></PagesToRead>
      },
      {
        path:"/bookdetails/:bookId",
        element: <BookDetails></BookDetails>,
        loader: () => fetch(`../books.json`)
      }
      
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} /> 
  </React.StrictMode>,
)
