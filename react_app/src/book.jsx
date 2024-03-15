import './book.css';
export default function Book({book}){
    console.log(book);
    const {bookName, bookPrice} = book;
    return (
        <div className='book'>
            <p>Name:- {bookName}</p>
            <p>Price:- {bookPrice}</p>
        </div>
    )
}