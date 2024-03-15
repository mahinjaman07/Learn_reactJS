import Book from "./book"

export default function BooksShore({books}){
    return (
        <div>
            <h1>Books :- {books.length}</h1>
            {books.map(book => <Book book={book}></Book>)}
        </div>
    )
}