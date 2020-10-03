import axios from "axios";

export default axios.create({
  baseURL:
    process.env.NODE_ENV !== "production"
      ? "http://localhost:8081/api"
      : "https://characterbook-api.azurewebsites.net/api",

  headers: {
    "Content-type": "application/json",
    Accept: "text/html",
  },
});
