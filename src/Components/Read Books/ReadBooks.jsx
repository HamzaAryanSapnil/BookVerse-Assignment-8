import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useLoaderData, useParams } from "react-router-dom";
import { getStoredReadingList } from "../../Utils/localStorage";

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

  return (
    <div>
      {readBooks.map((book) => (
        <div key={book.bookId}>
          <div className="card card-side bg-base-100 shadow-xl">
            <figure className="w-1/3">
              <img className="h-64 w-48 rounded-3xl " src={book.image} alt="Movie" />
            </figure>
            <div className="card-body">
              <div className="">
                <h2 className="card-title font-playfair text-navHeading text-2xl font-bold">
                  {book.bookName}
                </h2>
                <p className="text-navHeadingEighty font-medium font-work text-base">
                  {" "}
                  By: {book.author}
                </p>
              </div>
              <div className="flex gap-x-3 justify-start items-center">
                Tag
                {book.tags.map((tag, idx) => (
                  <button key={idx} className="btn bookIdentity">
                    {tag}
                  </button>
                ))}
                <p>Year of Publishing: {book.yearOfPublishing}</p>
              </div>

              <div className="card-actions justify-start border-b-2">
                <p className="text-navHeadingEighty font-medium font-work text-base">
                  Publisher: {book.publisher}
                </p>
                <p className="text-navHeadingEighty font-medium font-work text-base">
                  Page: {book.totalPages}
                </p>
              </div>
              <div className="flex gap-x-3 justify-start items-center">
                <button className="btn catagoryBtn rounded-full">Catagory: {book.category}</button>
                <button className="btn ratingBtn rounded-full">Rating: {book.rating}</button>
                <button className="btn signInBtn rounded-full">View Details</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

ReadBooks.propTypes = {};

export default ReadBooks;
