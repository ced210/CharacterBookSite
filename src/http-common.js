import axios from "axios";

export default axios.create({
  baseURL:
    process.env.NODE_ENV !== "production"
      ? "http://localhost:5001/character-book-api/us-central1/app/api"
      : "https://us-central1-character-book-api.cloudfunctions.net/app/api",

  headers: {
    "Content-type": "application/json",
    Accept: "text/html"
  }
});
