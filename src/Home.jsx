import Book from './components/Book';
import AddBook from './components/AddBook';
import useFetch from './useFetch';
import React, { useEffect, useState } from 'react';

function Home(){
    let { data, error } = useFetch('http://localhost:8000/books');
    let [books, setBooks] = useState(null);

    useEffect(() => {
        setBooks(data);
    }, [data]);


    //                     4
    function handleRemove(id) {
        /*
        let newBooks = books.filter(
            (element)=>{
                return element.id !=id;
            }
        )
        setBooks(newBooks);
        */

        fetch(`http://localhost:8000/books/${id}`, {
            method: 'DELETE'
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to remove book');
                }
                // Update the state of books after successful removal
                let newBooks = books.filter(
                    (element) => {
                        return element.id != id;
                    }
                )
                setBooks(newBooks);
            })
            .catch(error => {
                // Handle error
                console.error('Error removing book:', error);
            });
    }

    function handleSubmit(book) {
        fetch('http://localhost:8000/books', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(book)
        })
            .then(() => {
                let newBooks = [...books];
                newBooks.push(book);
                setBooks(newBooks);
            })
            .catch(error => {
                console.error('Error adding book:', error);
            });
    }


    return(
        <div>
           <AddBook handleSubmit={handleSubmit} />
            {
                !error ? books &&                                         // to make sure book is not null
                    books.map(
                        (element) => {
                            return <Book
                                key={element.id}
                                id={element.id}
                                title={element.title}
                                author={element.author}
                                price={element.price}
                                handleRemove={handleRemove}
                                books={books}
                                setBooks={setBooks}
                            >
                            </Book>
                        }
                    )
                    :
                    error
            }
        </div>
    )
}

export default Home;