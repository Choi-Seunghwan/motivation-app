import axios from "axios";

export function getTemp() {
  return axios.get("http://localhost:3000/test");
}
