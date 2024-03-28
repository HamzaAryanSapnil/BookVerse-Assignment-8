import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredWishlist } from "../../Utils/localStorage";

const ListedBooks = () => {
  const books = useLoaderData();
  const [wishBooks, setWishBooks] = useState([]);
  useEffect(() => {
    const storedBooksWishlist = getStoredWishlist();
    if (books.length > 0) {
      const booksInWishlist = books.filter((book) =>
        storedBooksWishlist.includes(book.bookId)
      );
      setWishBooks(booksInWishlist);
    }
  }, [books]);

  return (
    <div>
      <div className="w-full flex justify-center items-center bg-navHeadingFive py-8 my-8">
        <button className=" w-full text-navHeading font-bold font-work text-3xl ">
          Books
        </button>
      </div>

      <div className="flex justify-center items-center my-10" >
        <button className="btn signInBtn" >
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
    </div>
  );
};

export default ListedBooks;
