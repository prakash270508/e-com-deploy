import axios from "axios";
/** @type {import('./$types').PageLoad} */

export async function load() {
  const allProductResponse = await axios.get("https://dummyjson.com/products");
  const allProducts = allProductResponse.data.products;

  const catogoryList = await axios.get(
    "https://dummyjson.com/products/categories"
  );
  const catgoryRes = catogoryList.data;

  return {
    allProducts,
    catgoryRes,
  };
}
