<script>
  import axios from "axios";
  import Cookies from "js-cookie";
  import { onMount } from "svelte";
  import YourOrder from "../../components/orders/YourOrder.svelte";
  import { goto } from "$app/navigation";

  let orderItem = [];

  const token = Cookies.get("user_Token");

  export async function getOrders() {
    const response = await axios.get("https://server-1.vercel.app/order/your-order", {
      headers: {
        Authorization: token,
      },
    });

    orderItem = response.data;
  }

  onMount(() => {
    if (token !== undefined && token !== null) {
      getOrders();
    }else{
      goto('/login')
    }
  });
</script>

<section class="container h-100 h-custom" style="margin-top:2vw">
  <div class="py-5 h-100">
    <div class=" d-flex justify-content-center align-items-center h-100">
      <div class="col">
        <div class="">
          <div class="card-body p-4">
            <div class="row">
              <div class="col-lg-12">
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
                      You have {orderItem.length} items in your cart
                    </p>
                  </div>
                </div>
                <div>
                  <div class="mx-2" style="margin-bottom: -1vw;">
                    <div class="d-flex justify-content-between text-muted">
                      <div class="d-flex flex-row align-items-center">
                        <div>
                          <h5 class="mx-1">ORDER ID</h5>
                        </div>
                      </div>
                      <div class="d-flex flex-row align-items-center">
                        <div>
                          <h5 style="margin-left: 10vw;">QUANTITY</h5>
                        </div>
                      </div>
                      <div class="d-flex flex-row align-items-center mx-2">
                        <div>
                          <h5 style="margin-left: 8vw;">TOTAL PRICE</h5>
                        </div>
                      </div>
                      <div class="d-flex flex-row align-items-center mx-5">
                        <div>
                          <h5>ORDER STATUS</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                {#if !orderItem.length > 0}
                  <div>
                    <h2>
                      <b>No Item in OrderList</b>
                    </h2>
                  </div>
                {:else}
                  {#each orderItem as items}
                    <YourOrder product={items} />
                  {/each}
                {/if}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
