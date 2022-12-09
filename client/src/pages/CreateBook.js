import React, { useState } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
function CreateBook({ addFn }) {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    imageUrl: "",
    description: "",
  });
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
      <h3>הוספת ספר</h3>
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
          addFn(form.title, form.imageUrl, form.description);
          navigate("/");
        }}
      >
        הוספה
      </Button>
    </div>
  );
}

export default CreateBook;
