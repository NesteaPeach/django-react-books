import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function Book({ book, desc = false, remove }) {
  const navigate = useNavigate();
  return (
    <Card>
      <CardMedia
        component="img"
        height="300"
        image={book.imageUrl}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {book.title}
        </Typography>
        {desc === true && (
          <Typography variant="body2" color="text.secondary">
            {book.description}
          </Typography>
        )}
      </CardContent>
      {desc === false && (
        <CardActions>
          <Button size="small">
            <Link to={"show/" + book.id}>Show more</Link>
          </Button>
        </CardActions>
      )}
      {desc === true && (
        <CardActions>
          <Button
            variant="contained"
            onClick={() => {
              remove(book.id);
              navigate("/");
            }}
          >
            Delete
          </Button>
          <Button variant="contained">
            <Link to={"/edit/" + book.id}>Edit</Link>
          </Button>
        </CardActions>
      )}
    </Card>
  );
}

export default Book;
