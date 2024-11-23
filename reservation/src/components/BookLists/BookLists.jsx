import React, {useState} from 'react';
import styles from './BookLists.module.css';
import { booksData } from './BookData';

import ReactPaginate from 'react-paginate';

const BookCard = ({ book }) => {
    return (
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                <img src={book.imageUrl} alt={book.title} className={styles.image} />
            </div>
            <h3 className={styles.bookTitle}>{book.title}</h3>
            <p className={styles.author}>{book.author}</p>
            <p className={styles.description}>{book.description}</p>
            <button className={styles.reserveButton}>Reserve</button>
        </div>
    );
};

const BookLists = () => {

    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 10;

    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = booksData.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(booksData.length / itemsPerPage);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % booksData.length;
        setItemOffset(newOffset);

        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (
        <section className={styles.booksSection}>
            <h2 className={styles.title}>Book List</h2>
            <div className={styles.booksContainer}>
                {currentItems.map((book) => (
                    <BookCard key={book.id} book={book} />
                ))}
            </div>
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
                containerClassName={styles.pagination}
                pageLinkClassName={styles.page}
                previousLinkClassName={styles.previous}
                nextLinkClassName={styles.next}
                activeLinkClassName={styles.active}
            />
        </section>
    );
};

export default BookLists;
