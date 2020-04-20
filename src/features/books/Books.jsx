import React, { useState } from "react";
import styles from "./Books.module.css";
import BookItem from "./BookItem";
import { useDispatch, useSelector } from 'react-redux';

export default function Books() {
  const initialBooks = useSelector(state => state.books);
  const [inputValue, setInputValue] = useState("");
  const [booksSort, setBooksSort] = useState(initialBooks);
  const onClickButtonSearch = () => {
          setBooksSort(
            initialBooks.filter(item => item.toLowerCase().includes(inputValue.toLowerCase())),
          )
  };
  const onChangeInput = (event) => {
      const newValue = event.target.value;
      setInputValue(newValue);
      !newValue && setBooksSort(initialBooks);
  };

  return (
    <div className={styles.mainDiv}>
      <div className={styles.inputSection}>
        <input
          value={inputValue}
          onChange={onChangeInput}
        />
        <button
            className={styles.searchButton}
            onClick={onClickButtonSearch}
        />
      </div>
      <div className={styles.booksSection}>
        {booksSort.map(book => (
            <div key={book} className='bookItem'>
                <BookItem>
                    {book}
                </BookItem>
            </div>
        ))}
      </div>
    </div>
  );
}
