import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getStoredReadingList } from "../../Utils/localStorage";
import { IoPeople } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { MdInsertPageBreak } from "react-icons/md";

const ReadBooks = () => {
  const books = useLoaderData();
  const [readBooks, setReadBooks] = useState([]);
  useEffect(() => {
    const readBooks = getStoredReadingList();
    console.log(readBooks);
    if (books.length > 0) {
      const readBooksExists = books.filter((book) =>
        readBooks.includes(parseInt(book.bookId))
      );
      setReadBooks(readBooksExists);
    }
  }, [books]);

  return readBooks.length === 0 ? (
    <p>No books read yet</p>
  ) : (
    <div className="lg:space-y-8">
      {readBooks.map((book) => (
        <div key={book.bookId}>
          <div className="card card-side flex-col md:flex-row bg-base-100 shadow-xl">
            <figure className="md:w-1/3">
              <img
                className="h-64 w-48 rounded-3xl "
                src={book.image}
                alt="Movie"
              />
            </figure>
            <div className="card-body">
              <div className="space-y-2 py-3">
                <h2 className="card-title font-playfair text-navHeading text-2xl font-bold">
                  {book.bookName}
                </h2>
                <p className="text-navHeadingEighty font-medium font-work text-base">
                  By: {book.author}
                </p>
              </div>
              <div className="flex flex-wrap gap-y-2 gap-x-3 justify-start items-center pb-3">
                <span className="text-navHeading font-bold font-work text-base">
                  Tag
                </span>
                {book.tags.map((tag, idx) => (
                  <button key={idx} className="btn bookIdentity">
                    {tag}
                  </button>
                ))}
                <p className="text-navHeadingEighty font-work text-base flex justify-start gap-x-3 items-center">
                  <span>
                    <CiLocationOn />
                  </span>
                  Year of Publishing: {book.yearOfPublishing}
                </p>
              </div>

              <div className="card-actions justify-start border-b-2 pb-3">
                <p className="text-navHeadingSixty  font-work text-base flex items-center gap-x-3">
                  <span>
                    <IoPeople />
                  </span>{" "}
                  Publisher: {book.publisher}
                </p>
                <p className="text-navHeadingSixty  font-work text-base flex items-center gap-x-3">
                  <span>
                    <MdInsertPageBreak />
                  </span>{" "}
                  Page: {book.totalPages}
                </p>
              </div>
              <div className="flex flex-wrap gap-y-2 gap-x-3 justify-start items-center py-3">
                <button className="btn catagoryBtn rounded-full">
                  Catagory: {book.category}
                </button>
                <button className="btn ratingBtn rounded-full">
                  Rating: {book.rating}
                </button>
                <Link to={`/bookDetails/${book.bookId}`}>
                  <button className="btn signInBtn rounded-full">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReadBooks;
