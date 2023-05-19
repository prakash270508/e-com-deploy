<script>
  import { addCart } from "../../../lib/cart";

  export let data;
  const { brand, category, description, price, thumbnail, title } = data;
</script>

<div style="margin-top: 5vw">
  <div class="product container">
    <div class="d-flex text-muted">
      <div>Product --</div>
      <div class="text-muted">{brand} --</div>
      <div>{title}</div>
    </div>
    <hr />
    <div class="row">
      <div class="col-6">
        <div class="image-container">
          <img src={thumbnail} alt="" class="zoom-on-hover" />
        </div>
      </div>
      <div class="col-6">
        <div class="mx-4">
          <div class="text-muted">{category}</div>
          <h3 class="text-dark my-3">{title}</h3>
          <p class="text-muted">{description}</p>

          <br />
          <br />
          <div class="quantity d-flex">
            <div class=" text-dark">
              <b>
                <div>Price</div>
                <div>${price}</div>
              </b>
            </div>
          </div>
          <br />
          <br />
          <div />
          <br />
          <br />
          <div class="d-flex" style="margin-top: 7vw;">
            <button
              type="button"
              class="flex-fill mr-4 text-uppercase fw-bold btn btn-outline-danger mx-2"
              style="width: 50%;"
              on:click={() => addCart(data)}
            >
              Add to Cart
            </button>
            <a
              href="/cart"
              type="button"
              class="text-uppercase fw-bold btn btn-danger"
              style="width: 50%;"
              on:click={() => addCart(data)}
            >
              Buy now
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
