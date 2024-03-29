import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link, NavLink, useLoaderData } from "react-router-dom";
import { getStoredWishlist } from "../../Utils/localStorage";

const Wishlist = () => {
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
  
    
  }, [books])
  
 

  return (
    <div>
        {wishBooks.map(book => (
            <section key={book.bookId} className="dark:bg-gray-100 dark:text-gray-800">
            <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
              <NavLink
                rel="noopener noreferrer"
                
                className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50"
              >
                <img
                  
                  src={book.image}
                  alt=""
                  className="object-cover h-64 w-full rounded-3xl sm:h-96 lg:col-span-3 dark:bg-gray-500"
                />
                <div className="p-6 space-y-2 lg:col-span-9">
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
               <Link to={`/bookDetails/${book.bookId}`} >
                <button className="btn signInBtn rounded-full">View Details</button>
               </Link>
              </div>
                </div>
              </NavLink>
              
              
            </div>
          </section>
                
        ))}
    </div>
  );
};

Wishlist.propTypes = {};

export default Wishlist;
