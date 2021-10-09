import React from 'react'

function Book(props) {
    const book = props.book
    return (
        <div>
            <h5>{book.title}</h5>
            <p>{book.aut} </p>
            <p>{book.pages} </p>
        </div>
            )
        }

export default Book
