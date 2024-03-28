import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLoaderData, useParams } from 'react-router-dom';
import { getStoredReadingList } from '../../Utils/localStorage';

const ReadBooks = () => {
    const books = useLoaderData();
    console.log("read Books");
    useEffect(() => {
      const readBooks = getStoredReadingList();
      console.log(readBooks);
      if (books.length > 0) {
        const readBooksExists = books.filter((book) => readBooks.includes(parseInt(book.bookId)));
        console.log( "readBooksExists: ",readBooksExists);
      }
    
      
    }, [books])
    
    console.log(books); 
    return (
        <div>
            
        </div>
    );
};

ReadBooks.propTypes = {

};

export default ReadBooks;