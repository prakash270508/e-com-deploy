<script>
  import axios from "axios";
  import ProductList from "../../components/products/ProductList.svelte";
  let searchedProduct = [];
  let searchText = "";
  let error = "";
  let dummy = null

  const handleSubmit = async (e) => {
    e.preventDefault();

    error = ''
    searchedProduct = []

    const response = await axios.get(
      `https://dummyjson.com/products/search?q=${searchText}`
    );

    const data = response.data.products;
    searchedProduct = data
    // searchedProduct = searchedProduct;
    if (data.length == 0) {
      error = "No Product Found";
    }
    searchText = "";
    return searchedProduct;
  };

  $: searchedProduct ;

</script>

<div class="text-center" style="margin-top: 5vw;">
  <form on:submit={handleSubmit}>
    <div style="display: flex;">
      <input
        type="text"
        value={searchText}
        style="margin-left: 37vw;"
        class="form-control w-25"
        placeholder="Search Products"
        on:change={(e) => (searchText = e.target.value)}
      />
      <div>
        <i
          class="fas fa-search p-3"
          on:click={handleSubmit}
          on:keypress={(e) => {
            if (e.key === "Enter") handleSubmit;
          }}
        />
      </div>
    </div>
  </form>

  {#if searchedProduct.length == 0}
    <div>
      <h1 class="text-muted my-5" style="margin-top: 10vw;">
        {error == "" ? "Search Products" : error}
      </h1>
    </div>
  {:else}
  <div class="container">

    <div class="row my-4" style="align-items: center;">
      {#each searchedProduct as product}
      <ProductList product={product} col=2 mx=2 />
      {/each}
    </div>
  </div>
    {/if}
</div>

<style>
  .fa-search {
    color: white;
    background-color: gray;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    cursor: pointer;
  }
</style>
