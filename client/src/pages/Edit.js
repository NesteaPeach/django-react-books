import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

function Edit({ addFn }) {
  const navigate = useNavigate();
  const params = useParams();
  const [book, setBook] = useState({});
  const [form, setForm] = useState({
    title: "",
    imageUrl: "",
    description: "",
  });
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/books/${params.id}/`)
      .then((res) => res.json())
      .then((data) => {
        setBook(data);
        setForm(data);
      });
  }, []);
  const handleform = (event) => {
    setForm((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      };
    });
  };
  return (
    <div className="container">
      <h3>עריכת ספר</h3>
      <div>
        <input
          type="text"
          className="form-control"
          placeholder="כותרת"
          name="title"
          onChange={handleform}
          value={form.title}
        />
      </div>
      <div>
        <input
          type="text"
          className="form-control"
          placeholder="תמונה"
          name="imageUrl"
          onChange={handleform}
          value={form.imageUrl}
        />
      </div>
      <div>
        <textarea
          className="form-control"
          placeholder="תאור"
          name="description"
          onChange={handleform}
          value={form.description}
        />
      </div>
      <Button
        variant="outlined"
        onClick={() => {
          addFn(book.id, form.title, form.imageUrl, form.description);
          navigate("/");
        }}
      >
        שמירה
      </Button>
    </div>
  );
}

export default Edit;
