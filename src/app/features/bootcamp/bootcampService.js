import axios from "axios";
//  const BASE_URL = "http://localhost:5000/";
 const BASE_URL = "https://prodezign-backend.onrender.com/";

const getBootcamp = async (payload) => {
  const response = await axios.get(BASE_URL + "bootcamp");
  return response.data;
};

const getSingleBootcamp = async (payload) => {
  // payload here is id of the bootcamp
  const response = await axios.get(BASE_URL + "bootcamp/"+ payload);
  return response.data;
};

const bootcampService = {
  getBootcamp,
  getSingleBootcamp
};


export default bootcampService;
