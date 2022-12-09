import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import CreateBook from "./pages/CreateBook";
import Edit from "./pages/Edit";
import Home from "./pages/Home";
import OneBook from "./pages/OneBook";
import { useEffect, useState } from "react";

function App() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = () => {
    fetch("http://127.0.0.1:8000/api/books/")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
      });
  };
  const addBook = (title, imageUrl, description) => {
    let newBook = {
      title: title,
      imageUrl: imageUrl,
      description: description,
    };
    fetch(`http://127.0.0.1:8000/api/books/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newBook),
    })
      .then((res) => res.json())
      .then((data) => {
        setBooks((prevState) => {
          return [...prevState, data];
        });
      });
  };

  const editBook = (id, title, imageUrl, description) => {
    let updatedBook = {
      title: title,
      imageUrl: imageUrl,
      description: description,
    };
    fetch(`http://127.0.0.1:8000/api/books/${id}/`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedBook),
    })
      .then((res) => res.json())
      .then((data) => {
        fetchData();
      });
  };

  const deleteBook = (id) => {
    fetch(`http://127.0.0.1:8000/api/books/${id}/`, {
      method: "DELETE",
    }).then((res) => {
      fetchData();
    });
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home books={books} />} />
          <Route path="add/" element={<CreateBook addFn={addBook} />} />
          <Route path="edit/:id/" element={<Edit addFn={editBook} />} />
          <Route path="show/:id/" element={<OneBook remove={deleteBook} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
