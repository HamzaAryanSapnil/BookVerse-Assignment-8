import PropTypes from "prop-types";
const Book = ({ book }) => {
  console.log(book?.bookId);
  const { bookId, image, title, author, price, cover } = book ?? {};
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl">
        <figure>
          <img 
            className="h-64 w-48 rounded-3xl my-4"
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.object,
};
export default Book;
