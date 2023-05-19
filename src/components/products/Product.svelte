<script>
  import axios from "axios";
  import { onMount } from "svelte";
  import ProductList from "./ProductList.svelte";

  let allProducts = [];

  const fetchData = async () => {
    const response = await axios.get("https://dummyjson.com/products");
    allProducts = response.data.products;
  };

  onMount(() => {
    fetchData();
  });
</script>

<div class="container my-5" style="text-align: center ; font-family: system-ui">
  <h2>New Arrivels</h2>
  <p class="text-muted my-2">
    Check out our new furniture collection! Cozy sofa, fancy chair,
    <br />
    wooden casket, and many more. The new collection brings an informal elegance
    to your home.
  </p>
</div>

<div class="container">
  <div class="row">
    {#each allProducts as product}
      {#if product.id < 11}
        <ProductList {product} mx="3" col="2" />
      {/if}
    {/each}
    <a href={"/products"}>
      <button class="btn viewBtn mb-5">
        View More Products <i class="fa-solid fa-arrow-right" />
      </button>
    </a>
  </div>
</div>


<style>
    .viewBtn {
      border: 0.5px solid #bd744c;
      font-weight: 600;
      font-size: 20px;
      color: #bd744c;
    }
    .viewBtn:hover {
    background-color: #bd744c;
    color: white;
    font-weight: 400;
  }
  </style>
