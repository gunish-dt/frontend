import axios from "axios";

window.onload = function fetchBooks() {
  axios.defaults.headers.post["Content-Type"] =
    "application/json;charset=utf-8";
  axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
  axios
    .get("http://localhost:8082/api/books/")
    .then((res) => {
      this.setState({
        books: res.data,
      });
    })
    .catch((err) => {
      console.log("Error from ShowBookList");
    });
};
