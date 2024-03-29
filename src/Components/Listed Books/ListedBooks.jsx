import { useEffect, useState } from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import { getStoredWishlist } from "../../Utils/localStorage";



const ListedBooks = () => {
  const books = useLoaderData();
  const [wishBooks, setWishBooks] = useState([]);
  const [tabIndex, setTabIndex] = useState(0);
  useEffect(() => {
    const storedBooksWishlist = getStoredWishlist();
    if (books.length > 0) {
      const booksInWishlist = books.filter((book) =>
        storedBooksWishlist.includes(book.bookId)
      );
      setWishBooks(booksInWishlist);
    }
  }, [books]);
  //   const { bookId, image, bookName, author, category, rating, tags } = wishBooks ?? {};
  // console.log(wishBooks);
  return (
    <div className="container mx-auto">
      <div className="p-4">
        <div className="lg:max-w-7xl mx-auto flex justify-center items-center bg-navHeadingFive py-8 my-8 rounded-3xl ">
          <button className="  text-navHeading font-bold font-work text-3xl ">
            Books
          </button>
        </div>
      </div>

      <div className="flex justify-center items-center my-10 z-10">
        <button className="btn signInBtn">
          <details className=" signInBtn">
            <summary  className="m-1 signInBtn">Sort By</summary>
            <ul className="p-2 shadow menu  z-10  rounded-box w-52 signInBtn ">
              <li>
                <a>Rating</a>
              </li>
              <li>
                <a>Number Of Pages</a>
              </li>
              <li>
                <a>Publish Year</a>
              </li>
            </ul>
          </details>
        </button>
      </div>

      <div className="max-w-7xl px-6 py-16 mx-auto space-y-12 z-0">
        <article className="space-y-8 dark:bg-gray-100 dark:text-gray-900">
          <div className="space-y-6">
            {/* tabs */}
            <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap dark:bg-gray-100 dark:text-gray-800">
              <Link
                onClick={() => setTabIndex(0)}
                rel="noopener noreferrer"
                href="#"
                className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
                  tabIndex === 0 ? "border border-b-0" : "border-b"
                } rounded-t-lg dark:border-gray-600 dark:text-gray-900`}
              >
                <span>Read Books</span>
              </Link>
              <Link
                to={"wishlist"}
                onClick={() => setTabIndex(1)}
                rel="noopener noreferrer"
                href="#"
                className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
                  tabIndex === 1 ? "border border-b-0" : "border-b"
                } rounded-t-lg dark:border-gray-600 dark:text-gray-900`}
              >
                <span>Wishlist</span>
              </Link>
            </div>
          </div>
          <Outlet></Outlet>
        </article>
      </div>
    </div>
  );
};

export default ListedBooks;
