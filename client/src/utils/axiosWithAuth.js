import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("authToken");
  return axios.create({ headers: { Authorization: token } });
}