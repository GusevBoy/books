import React, { useState } from "react";
import styles from "./Books.module.css";

export default function Books() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className={styles.mainDiv}>
      <div className={styles.inputSection}>
        <input
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
        <button className={styles.searchButton}></button>
      </div>
      <div className={styles.booksSection}>{/* Вывести список здесь */}</div>
    </div>
  );
}
