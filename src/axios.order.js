import axios from "axios";

const instance = axios.create({
  baseURl: "https://react-burger-builder-7f188-default-rtdb.firebaseio.com/",
});

export default instance;
