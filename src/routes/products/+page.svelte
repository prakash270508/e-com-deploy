<script>
  import ProductList from "../../components/products/ProductList.svelte";
  import axios from "axios";
  import { writable } from "svelte/store";

  /** @type {import('./$types').PageData} */
  export let data;
  const categories = data.catgoryRes;
  const productsList = writable(data.allProducts);
  let selectedCat = [];

  productsList.subscribe((data) => {
    selectedCat = data;
  });

  const handleClick = async (name) => {

    selectedCat = []

    const response = await axios.get(
      `https://dummyjson.com/products/category/${name}`
    );
    selectedCat =  response.data.products;
    selectedCat = [...selectedCat];
    return selectedCat
  };
</script>

<div class="container">
  <div class="row">
    <div class="col-3" style="margin-top:5vw;">
      <h3 style="text-align: center;">Filters</h3>
      <div class="my-4">
        <h4>Category</h4>
        <div>
          {#each categories as category}
            <p
              on:click={() => handleClick(category)}
              on:keypress={(e) => {
                if (e.key === "Enter") handleClick(category);
              }}
              style="cursor: pointer;"
            >
              {category.toUpperCase()}
            </p>
          {/each}
        </div>
      </div>
    </div>
    <div class="col-9" style="margin-top: 8vw">
      <div class="row">
        {#if selectedCat.length == 0}
          {#each $productsList as product}
            <ProductList {product} col="3" />
          {/each}
        {:else}
          {#each selectedCat as product}
            <ProductList {product} col="3" />
          {/each}
        {/if}
      </div>
    </div>
  </div>
</div>
