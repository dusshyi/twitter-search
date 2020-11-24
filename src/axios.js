import axios from "axios";

const instance = axios.create({
  baseURL: `https://jsonplaceholder.typicode.com/`,
  // headers: {
  //   'X-auth-key': "token123"
  // }
});

export default instance;
