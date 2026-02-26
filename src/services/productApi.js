import axios from "axios";

const API = axios.create({
  baseURL: "https://dummyjson.com",
});

export const fetchProducts = async () => {
  const { data } = await API.get("/products");
  return data.products;
};

export const fetchProductById = async (id) => {
  const { data } = await API.get(`/products/${id}`);
  return data;
};

export const fetchProduct = async () => {
  const { data } = await axios.get("https://dummyjson.com/products?limit=100");

  return data.products;
};
