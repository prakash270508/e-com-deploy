<script>
  import { grossItem, grossTotal } from "../../lib/cart";
</script>

<div>
  <div class="cartPayment">
    <div class="mx-3">
      <div class="text-dark">
        <h2 class="my-3">Cart Total</h2>
        <br />
        <h6>
          <b>
            Subtotal: <span class="mx-4">${$grossTotal}</span>{" "}
          </b>
        </h6>
        <h6>
          <b>
            Total Product: <span class="mx-2">{$grossItem}</span>{" "}
          </b>
        </h6>
        <hr class="text-muted" />
        <br />
        <div>
          <h6>
            <b>Shipping: </b>
            <span class="mx-3">
              <b>Free Shipping</b>
            </span>{" "}
          </h6>
        </div>
        <p class="text-muted" style="margin-left: 6vw;">
          Shipping options will be updated during checkout.
        </p>
        <hr class="text-muted" />
        <br />
        <h5>
          <b>
            Total: <span class="mx-4">${$grossTotal}</span>{" "}
          </b>
        </h5>
        <br />
        <br />
        <br />
      </div>
    </div>
  </div>
  <a href={"/payment"}>
    <button class="checkOutBtn">Check Out</button>
  </a>
</div>
