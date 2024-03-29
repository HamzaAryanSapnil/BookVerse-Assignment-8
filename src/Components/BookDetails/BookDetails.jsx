import PropTypes from "prop-types";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  getStoredReadingList,
  getStoredWishlist,
  removeFromWishlist,
  saveReadingList,
  saveWishlist,
} from "../../Utils/localStorage";

const BookDetails = () => {
  const books = useLoaderData();
  const { bookId } = useParams();
  const bookIdInt = parseInt(bookId);
  const book = books.find((book) => book.bookId === bookIdInt);
  const {
    image,
    bookName,
    author,
    category,
    review,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
  } = book ?? {};

  const handleWishlistBtn = () => {
    const getBooksFromReadingList = getStoredReadingList();
    const getBooksFromWishlist = getStoredWishlist();
    if (getBooksFromWishlist.includes(bookIdInt)) {
      toast("Already added to wishlist");
      return;
    } else if (
      getBooksFromReadingList.includes(bookIdInt) &&
      !getBooksFromWishlist.includes(bookIdInt)
    ) {
      toast("You Have Already Read This Book");
      return;
    } else if (!getBooksFromWishlist.includes(bookIdInt)) {
      saveWishlist(bookIdInt);
      toast("Added to wishlist");
    }
  };
  const handleReadBtn = () => {
    const getBooksFromReadingList = getStoredReadingList();
    if (getBooksFromReadingList.includes(bookIdInt)) {
      toast("Already read this book");
      return;
    } 
    saveReadingList(bookIdInt);
    removeFromWishlist(bookIdInt);
    toast("Thanks for reading this book");
  };
  return (
    <div className=" container flex justify-center items-center lg:p-10 " >
      <div className="flex justify-center items-start gap-x-6 lg:flex-row flex-col">
        <div className="bg-navHeadingFive w-full lg:h-[700px] lg:w-1/2 flex justify-center items-center rounded-lg" >
          <img className="lg:h-[500px] lg:w-[400px]  rounded-lg" src={image} alt="" />
        </div>
        <div className="w-1/2" >
          <div className="border-b-2 space-y-4">
            <h1 className="text-navHeading font-playfair font-bold text-4xl" >{bookName}</h1>
            <p className="text-navHeadingEighty font-work text-xl font-medium pb-3" >By: {author}</p>
          </div>
          <p className="border-b-2 py-4 text-navHeadingEighty font-work text-xl font-medium">{category}</p>
          <p className="py-4" >
            <span className="font-work font-bold text-navHeading text-xl" >Review: </span> {review}
          </p>

          <div className="flex gap-x-3  items-center border-b-2 py-4">
            <p className="font-work font-bold text-navHeading" >Tags: </p>
            {tags.map((tag, idx) => (
              <button key={idx} className="btn bookIdentity">
                {tag}
              </button>
            ))}
          </div>
          <div className="overflow-x-auto py-4">
            <table className="table">
              <tbody>
                {/* row 1 */}
                <tr>
                  <td className="text-navHeadingSeventy font-work" >Number of Pages</td>
                  <td className="font-work text-navHeading font-semibold" >{totalPages}</td>
                </tr>
                {/* row 2 */}
                <tr>
                  <td className="text-navHeadingSeventy font-work" >Publisher</td>
                  <td className="font-work text-navHeading font-semibold" >{publisher}</td>
                </tr>
                {/* row 3 */}
                <tr>
                  <td className="text-navHeadingSeventy font-work" >Year Of Publishing</td>
                  <td className="font-work text-navHeading font-semibold" >{yearOfPublishing}</td>
                </tr>
                {/* row 4 */}
                <tr>
                  <td className="text-navHeadingSeventy font-work" >Rating</td>
                  <td className="font-work text-navHeading font-semibold" >{rating}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="flex items-center gap-x-4">
            <button
              onClick={handleReadBtn}
              className="btn border-2 bg-transparent"
            >
              Read
            </button>
            <button onClick={handleWishlistBtn} className="btn signUpBtn">
              Wishlist
            </button>
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

BookDetails.propTypes = {};

export default BookDetails;
