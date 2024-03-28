
import PropTypes from 'prop-types';
import { useLoaderData, useParams } from 'react-router-dom';

const BookDetails = () => {
    const books = useLoaderData();
    const {image, bookName, author, category, rating,  review, tags, totalPages, publisher,yearOfPublishing} = useParams() ;
    console.log(bookName, books);
    return (
        <div>
            <div className='flex' >
                <div>
                    <img src={image} alt="" />
                </div>
                <div>
                    <div>
                        <h1>{bookName}</h1>
                        <p>By: {author}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

BookDetails.propTypes = {
    
};

export default BookDetails;