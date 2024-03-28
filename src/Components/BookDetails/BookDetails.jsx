import PropTypes from "prop-types";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveReadingList } from "../../Utils/localStorage";

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
  const handleReadBtn = () => {
    saveReadingList(bookIdInt);
    toast("Thanks for reading this book");
  };
  return (
    <div>
      <div className="flex">
        <div>
          <img src={image} alt="" />
        </div>
        <div>
          <div className="border-b-2">
            <h1>{bookName}</h1>
            <p>By: {author}</p>
          </div>
          <p className="border-b-2">{category}</p>
          <p>
            <span>Review: </span> {review}
          </p>

          <div className="flex gap-x-3  items-center border-b-2">
            <p>Tags: </p>
            {tags.map((tag, idx) => (
              <button key={idx} className="btn bookIdentity">
                {tag}
              </button>
            ))}
          </div>
          <div className="overflow-x-auto">
            <table className="table">
              <tbody>
                {/* row 1 */}
                <tr>
                  <td>Number of Pages</td>
                  <td>{totalPages}</td>
                </tr>
                {/* row 2 */}
                <tr>
                  <td>Publisher</td>
                  <td>{publisher}</td>
                </tr>
                {/* row 3 */}
                <tr>
                  <td>Year Of Publishing</td>
                  <td>{yearOfPublishing}</td>
                </tr>
                {/* row 4 */}
                <tr>
                  <td>Rating</td>
                  <td>{rating}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="flex items-center gap-x-4">
            <button onClick={handleReadBtn} className="btn border-2 bg-transparent" >Read</button>
            <button className="btn signUpBtn" >Wishlist</button>
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

BookDetails.propTypes = {};

export default BookDetails;
