import PropTypes from "prop-types";
import { TiStarFullOutline } from "react-icons/ti";
import { NavLink } from "react-router-dom";
const Book = ({ book }) => {
  const { bookId, image, bookName, author, category, rating, tags } =
    book ?? {};
  return (
    <NavLink to={`/bookdetails/${bookId}`}>
      <div className="card w-full md:w-72 lg:w-96 h-[550px] bg-base-100 shadow-xl">
        <figure className="bg-bookImgBg h-72">
          <img className="h-64 w-48 rounded-3xl my-4" src={image} alt="Book" />
        </figure>
        <div className="card-body">
          {/* <button className="btn bookIdentity">Young Adult</button>
            <button className="btn bookIdentity">Identity</button> */}
          <div className="flex gap-x-3">
            {tags.map((tag, idx) => (
              <button key={idx} className="btn bookIdentity">
                {tag}
              </button>
            ))}
          </div>
          <div className="space-y-3 border-b-2 border-dashed py-4">
            <h2 className="card-title font-playfair text-navHeading text-2xl font-bold">
              {bookName}
            </h2>
            <p className="text-navHeadingEighty font-medium font-work text-base">
              {" "}
              By: {author}
            </p>
          </div>
          <div className="card-actions justify-between">
            <p className="text-navHeadingEighty font-medium font-work text-base">
              {category}
            </p>
            <div className="flex gap-x-4 justify-center items-center">
              <p className="text-navHeadingEighty font-work font-medium">
                {" "}
                {rating}{" "}
              </p>
              <p className={rating >= 4.5 ? "text-yellow-400" : "text-rating"}>
                {" "}
                <TiStarFullOutline></TiStarFullOutline>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

Book.propTypes = {
  book: PropTypes.object,
};
export default Book;
