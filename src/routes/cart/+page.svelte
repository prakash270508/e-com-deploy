<script>
  import CartItems from "../../components/cart/CartItems.svelte";
  import CartPayment from "../../components/cart/CartPayment.svelte";
  import { cartItems } from "../../lib/cart";

  let items = [];

  cartItems.subscribe((data) => {
    items = data;
  });
</script>

<section class="container h-100 h-custom" style="margin-top:2vw">
  <div class="py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col">
        <div class="">
          <div class="card-body p-4">
            <div class="row">
              <div class="col-lg-8">
                <h5 class="mb-3">
                  <a href={"/"} class="text-body">
                    <i class="fas fa-long-arrow-alt-left me-2" />
                    Continue shopping
                  </a>
                </h5>

                <div
                  class="d-flex justify-content-between align-items-center mb-4"
                >
                  <div>
                    <h2 class=" my-3 text-dark">Shopping cart</h2>
                    <p class="mb-0 my-2 tet-muted">
                      You have {items.length} items in your cart
                    </p>
                  </div>
                </div>
                <div>
                  <div class="mx-2" style="margin-bottom: -1vw;">
                    <div class="d-flex justify-content-between text-muted">
                      <div class="d-flex flex-row align-items-center">
                        <div>
                          <h5 class="mx-1">PRODUCT</h5>
                        </div>
                      </div>
                      <div class="d-flex flex-row align-items-center">
                        <div>
                          <h5 style="margin-left: 17vw;">QUANTITY</h5>
                        </div>
                      </div>
                      <div class="d-flex flex-row align-items-center mx-2">
                        <div>
                          <h5 style="margin-right: 3vw;">PRICE</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                {#if items.length == 0}
                  <div>
                    <h2>
                      <b>No Item in cart</b>
                    </h2>
                  </div>
                {:else}
                  {#each items as item}
                    <CartItems product={item} />
                  {/each}
                {/if}
              </div>
              <div class="col-lg-4">
                <CartPayment />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
