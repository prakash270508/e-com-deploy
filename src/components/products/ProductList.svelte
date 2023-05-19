<script>
  export let product;
  export let col;
  export let mx;
  const { title, price, images, id, brand } = product;
</script>

<div class={`col-lg-${col} col-md-12 mb-4 mx-${mx}`}>
  <a href={`/product/${id}`} style="text-decoration:none">
    <div class="product">
      <img
        src={images.length > 0
          ? images[0]
          : "https://www.toolworld.in/storage/media/product/noimage.png"}
        class="productImage zoom"
        alt="productimage"
      />
      <div class="text-muted">{brand}</div>
      <h5 class="text-bold">{title}</h5>
      <h6 class="text-secondary">${price}</h6>
    </div>
  </a>
</div>


<style>
    .zoom {
  transition: transform 0.2s ease-in; /* Animation */
  width: 200px;
  height: 200px;
  margin: 0 auto;
}

.zoom:hover {
  transform: scale(
    1.03
  ); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
}

.product {
  margin: 1vw auto;
  color: black;
}
.product:hover {
  color: #bd744c;
}
</style>

