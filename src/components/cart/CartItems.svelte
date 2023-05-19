<script>
  export let product;
  import { addCart, cartItems, subCart, removeCart } from "../../lib/cart";
  const { image, name, totalPrice, quantity, id, price } = product;

  let productCount = quantity;
  let productTotalPrice = totalPrice;

  cartItems.subscribe((data) => {
    const findProduct = data.find((pro) => pro.id == id);
    productCount = findProduct?.quantity || 0;
    productTotalPrice = findProduct?.totalPrice || 0;
  });
</script>

<div>
  <div class="card mb-3">
    <div class="card-body">
      <div class="d-flex justify-content-between">
        <div class="d-flex flex-row align-items-center">
          <div>
            <img
              src={image}
              class="img-fluid rounded-3"
              alt="Shopping item"
              style="width: 70px;"
            />
          </div>
          <div class="ms-3 mt-3">
            <h5>{name}</h5>
            <p class="text-muted">${price}</p>
          </div>
        </div>
        <div class="d-flex flex-row align-items-center">
          <h4 class="d-flex" style="margin-right: 10vw; width:50px">
            <button
              on:click={() => subCart(product)}
              class={productCount > 1
                ? "fw-normal custom-btn"
                : " custom-btn btn disabled"}
            >
              -
            </button>
            <h5 class="fw-normal pt-3">{productCount}</h5>
            <button
              class="fw-normal mb-0 custom-btn"
              on:click={() => addCart(product)}
            >
              +
            </button>
          </h4>
          <div style="width: 80px;">
            <h5 class="mb-0">${productTotalPrice}</h5>
          </div>
          <p style="color: #cecece;">
            <button class="custom-btn" on:click={() => removeCart(product)}>
              <i class="fa fa-trash" />
            </button>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
