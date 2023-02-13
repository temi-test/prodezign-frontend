import axios from "axios";
// const BASE_URL = "http://localhost:5000/";
 const BASE_URL = "https://pleasant-petticoat-pig.cyclic.app/";

//Register User
const register = async (payload) => {
  const response = await axios.post(BASE_URL + "auth/signup", payload);
  if (response.data) {
    localStorage.setItem("prodezign_user_token", JSON.stringify(response.data.token));
  }
  return response.data;
};

const login = async (payload) => {
  const response = await axios.post(BASE_URL + "auth/login", payload);
  /// note store only the token in local storage
  /// other user data are stored in the auth redux state
  if (response.data) {
    localStorage.setItem("prodezign_user_token", JSON.stringify(response.data.token));
  }
  return response.data;
};

const verify = async (payload) => {
  const user = payload.token;
  const response = await axios.post(BASE_URL + "auth/verify", payload.data, {
    headers: { Authorization: `Bearer ${user}` },
  });
  return response.data;
};

const readUser = async (payload) => {
  // const user = payload.token;
  const response = await axios.get(BASE_URL + "auth", {
    headers: { Authorization: `Bearer ${payload}` },
  });

  return response.data;
};

const readEnrollments = async (payload) => {
  console.log("payload is below")
  console.log(payload)
 const user = payload.token;
  const response = await axios.get(BASE_URL + "bootcamp/enrollment/"+payload.id, {
    headers: { Authorization: `Bearer ${user}` },
  });

  return response.data;
};

const authService = {
  register,
  login,
  verify,
  readUser,
  readEnrollments,
};

export default authService;
