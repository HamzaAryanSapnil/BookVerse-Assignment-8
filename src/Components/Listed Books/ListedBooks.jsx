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
  return (
    <div className="container mx-auto">
      <div className="w-full flex justify-center items-center bg-navHeadingFive py-8 my-8">
        <button className=" w-full text-navHeading font-bold font-work text-3xl ">
          Books
        </button>
      </div>

      <div className="flex justify-center items-center my-10">
        <button className="btn signInBtn">
          <details className=" signInBtn">
            <summary className="m-1 signInBtn">Sort By</summary>
            <ul className="p-2 shadow menu  z-[1]  rounded-box w-52 signInBtn ">
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </details>
        </button>
      </div>

      <div className="max-w-4xl px-6 py-16 mx-auto space-y-12">
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
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
			<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
		</svg> */}
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
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
			<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
			<path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
		</svg> */}
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
