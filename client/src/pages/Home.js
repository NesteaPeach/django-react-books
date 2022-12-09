import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Book from "../components/Book";
function Home({ books }) {
  return (
    <div className="row">
      {books.map((book) => (
        <div className="col" key={book.id}>
          <Book book={book} />
        </div>
      ))}
    </div>
  );
}

export default Home;
