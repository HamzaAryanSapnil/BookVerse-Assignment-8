
import PropTypes from 'prop-types';
import { useLoaderData } from 'react-router-dom';

const BookDetails = () => {
    const books = useLoaderData();
    console.log(books);
    return (
        <div>
            Book details
        </div>
    );
};

BookDetails.propTypes = {
    
};

export default BookDetails;