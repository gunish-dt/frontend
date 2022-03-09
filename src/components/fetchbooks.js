import axios from "axios";

window.onload = function fetchBooks() {
  axios.defaults.headers.post["Content-Type"] =
    "application/json;charset=utf-8";
  axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
  axios
    .get("http://gunishbackend.devtron.info:31585/api/books/")
    .then((res) => {
      this.setState({
        books: res.data,
      });
    })
    .catch((err) => {
      console.log("Error from ShowBookList");
    });
};
