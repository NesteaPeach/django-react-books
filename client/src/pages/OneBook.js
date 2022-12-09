import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Book from "../components/Book";

function OneBook({ remove }) {
  const navigate = useNavigate();
  const params = useParams();
  const [book, setBook] = useState({});
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/books/${params.id}/`)
      .then((res) => {
        if (res.status == 404) {
          navigate("/");
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setBook(data);
      });
  }, []);
  return (
    <div>
      <Book desc={true} book={book} remove={remove} />
    </div>
  );
}

export default OneBook;
