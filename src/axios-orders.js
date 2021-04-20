import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-f2217-default-rtdb.firebaseio.com/",
});

export default instance;
