import React from 'react';
import PropTypes from 'prop-types';
import { useLoaderData } from 'react-router-dom';

const Wishlist = () => {
    const books = useLoaderData();
    console.log(books,);
    return (
        <div>
            {books.bookName}
        </div>
    );
};

Wishlist.propTypes = {
    
};

export default Wishlist;