import axios from "axios";

const baseUrl = "/api/items";

const searchItems = ({ query }) => {
  const request = axios.get(`${baseUrl}?q=${query}`);

  return request.then((response) => response.data);
};

const getItem = ({ id }) => {
  const request = axios.get(`${baseUrl}/${id}`);

  return request.then((response) => response.data);
};

export default {
  searchItems,
  getItem,
};
