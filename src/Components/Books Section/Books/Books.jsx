import { useEffect, useState } from "react";
import Book from "../Book/Book";


const Books = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
      (async () => {
          const url = "books.json";
          const response = await fetch(url);
          const data = await response.json();
          setBooks(data);
      })();

    
      
    }, [])
    
    return (
        <div className="mx-auto container " >
            Books: {books.length}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center justify-center items-center content-stretch" >
                {
                    books.map((book) => (
                        <Book key={book?.bookId} book={book}></Book>
                    ))
                }
            </div>
            
        </div>
    );
};

export default Books;