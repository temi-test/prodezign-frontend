import axios from "axios";

const BASE_URL = "http://localhost:5000/";

const create = async (payload) => {
  const user = payload.token;
  const response = await axios.post(BASE_URL + "deposit/charge", payload.data, {
    headers: { Authorization: `Bearer ${user}` },
  });
  return response.data;
};


const authorize = async (payload) => {
  const user = payload.token;
  const response = await axios.post(BASE_URL + "deposit/authorize", payload.data, {
    headers: { Authorization: `Bearer ${user}` },
  });
  return response.data;
};

const validate = async (payload) => {
  const user = payload.token;
  const response = await axios.post(BASE_URL + "deposit/validate", payload.data, {
    headers: { Authorization: `Bearer ${user}` },
  });
  return response.data;
};

const read = async (payload) => {
  const user = payload.token;
  const response = await axios.get(BASE_URL + "session/" + payload._id, {
    headers: { Authorization: `Bearer ${user}` },
  });
  //   console.log("setup service read response");
  //   console.log(response);
  return response.data;
};

const update = async (payload) => {
  console.log("session service update debug");
  console.log(payload);
  const user = payload.token;
  const response = await axios.put(BASE_URL + "session/", payload.data, {
    headers: { Authorization: `Bearer ${user}` },
  });
  //   console.log("session service update response");
  //   console.log(response);
  return response.data;
};

const remove = async (payload) => {
  console.log("session service remove debug");
  console.log(payload);
  const user = payload.token;
  const response = await axios.delete(
    BASE_URL + "session/" + payload.data._id,
    {
      headers: { Authorization: `Bearer ${user}` },
    }
  );

  return response.data;
};

const sessionService = {
  create,
  read,
  authorize,
  validate,
  update,
  remove,
};

export default sessionService;
