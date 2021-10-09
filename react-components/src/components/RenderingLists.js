import React from 'react';
import Book from './Book';

function RenderingLists() {
    const booklist = [
        'book1',
        'book2',
        'book3'
    ]

    const books = [
        {
            title: 'book1',
            aut: 'kkk',
            pages: 99
            },
        {
            title: 'book2',
            aut: 'mmmm',
            pages: 99
            },
        {
            title: 'book3',
            aut: 'jjj',
            pages: 99
            },
    ]
    return (
        <div>
            {booklist.map(book => {
                return <h2 key={book} book={book}/>
            }) }
            <hr/>
            {books.map(book => {
                return <Book key={book.title} book={book} />
            }) }
        </div>

    )
}

export default RenderingLists
