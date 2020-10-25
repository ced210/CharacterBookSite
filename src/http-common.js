import axios from "axios";

export default axios.create({
  baseURL:
    process.env.NODE_ENV !== "production"
      ? "http://localhost:5001/character-book/us-central1/app/api"
      : "https://us-central1-character-book.cloudfunctions.net/app/api",

  headers: {
    "Content-type": "application/json",
    Accept: "text/html"
  }
});
