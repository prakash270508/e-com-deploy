import axios from "axios";

export async function load({ params }) {
  const response = await axios.get(
    `https://dummyjson.com/products/${params.id}`
  );

  return response.data;
}
