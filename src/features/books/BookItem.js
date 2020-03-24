import React from "react";
import bookIcon from "../../assets/menu_book-24px.svg";

export default function BookItem({ children }) {
  return (
    <div
      style={{
        display: "flex",
        border: "0.5px solid black",
        padding: "4px",
        borderRadius: "3px",
        margin: "5px",
        backgroundColor: "#e9f1e7"
      }}
    >
      <img
        src={bookIcon}
        style={{ height: "20px", marginRight: "6px" }}
        alt='book'
      />
      <span>{children}</span>
    </div>
  );
}
