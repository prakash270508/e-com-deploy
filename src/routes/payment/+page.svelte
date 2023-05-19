<script>
  import { grossTotal, cartItems, grossItem } from "../../lib/cart";
  import { userData } from "../../lib/auth";
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";
  import axios from "axios";
  import Cookies from "js-cookie";

  const token = Cookies.get("user_Token");

  let shippingInfo = {
    city: "",
    state: "",
    country: " ",
    pinCode: "",
    phoneNo: "",
    usersName: "",
  };

  let cardDetails = {
    cardHolderName: "",
    cardNumber: "",
    cvv: "",
  };

  let oderItems = $cartItems;

  let shippingPrice = $grossTotal;

  let totalPrice = $grossTotal;

  onMount(() => {
    if (!$userData.isLoggedin) {
      goto("/login");
    }
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      shippingInfo,
      oderItems,
      shippingPrice,
      totalPrice,
      cardDetails,
    };

    try {

      const response = await axios.post(
        "https://server-1.vercel.app/order/place-order",
        data,
        {
          headers: {
            Authorization: token,
          },
        }
      );

        cartItems.set([])
        grossItem.set(0)
        grossTotal.set(0)

      await alert(response.data.message);

      goto('/your-order')
    } catch (error) {
      if (error.response.status === 500) {
        return alert("Please fill All details");
      }
      return alert(error.message);
    }
  };
</script>

<div class="container" style="margin-top: 6vw; margin-bottom :2vw;">
  <h2>
    <b>Billing Info</b>
  </h2>
  <p class="text-muted">
    Choose a payment option below and fill out the aproriate infomation
  </p>
  <br />
  <br />
  <form onSubmit={handleSubmit}>
    <div class="row">
      <div class="col-7" style="margin-right: 4vw;">
        <h2>
          <b>Billing Address</b>
        </h2>
        <br />
        <div class="mb-3">
          <label for="" class="form-label">
            <b>First Name</b>
          </label>
          <input
            bind:value={shippingInfo.usersName}
            type="text"
            class="form-control"
            id=""
            aria-describedby="emailHelp"
            placeholder="First name"
          />
        </div>
        <div class="row">
          <div class="mb-3 col-8">
            <label for="" class="form-label">
              <b>Country</b>
            </label>
            <input
              type="text"
              bind:value={shippingInfo.country}
              class="form-control"
              id=""
              aria-describedby="emailHelp"
              placeholder="eg. India"
            />
          </div>
          <div class="mb-3 col-4">
            <label for="" class="form-label">
              <b>City</b>
            </label>
            <input
              type="text"
              bind:value={shippingInfo.city}
              class="form-control"
              id=""
              aria-describedby="emailHelp"
              placeholder="City name"
            />
          </div>
        </div>
        <div class="row">
          <div class="mb-3 col-7">
            <label for="exampleInput" class="form-label">
              <b>State</b>
            </label>
            <input
              type="text"
              bind:value={shippingInfo.state}
              class="form-control"
              id=""
              aria-describedby="emailHelp"
            />
          </div>
        </div>
        <div class="row">
          <div class="mb-3 col-4">
            <label for="" class="form-label">
              <b>Pincode</b>
            </label>
            <input
              type="number"
              bind:value={shippingInfo.pinCode}
              class="form-control"
              id=""
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3 col-4">
            <label for="" class="form-label">
              <b>Phone</b>
            </label>
            <input
              bind:value={shippingInfo.phoneNo}
              type="number"
              class="form-control"
              id=""
              aria-describedby="emailHelp"
              placeholder="+375 (29)"
            />
          </div>
        </div>
        <div class="mb-3">
          <label for="" class="form-label">
            <b>Email</b>
          </label>
          <input
            value={$userData.user.email}
            type="email"
            disabled
            class="form-control"
            id=""
            aria-describedby="emailHelp"
            placeholder="Enter your email"
          />
        </div>
      </div>
      <div class="col-3 px-4" style="background-color: #f0f0f0;">
        <div class="py-4">
          <h3>
            <b>Credit Card Info</b>
          </h3>
          <div class="my-3">
            <label for="" class="form-label mx-1">
              <b>Cardholder Name</b>
            </label>
            <input
              bind:value={cardDetails.cardHolderName}
              type="text"
              class="form-control"
              id=""
              aria-describedby="emailHelp"
            />
          </div>
          <div class="my-3">
            <label for="" class="form-label mx-1">
              <b>Card Number</b>
            </label>
            <input
              bind:value={cardDetails.cardNumber}
              type="number"
              class="form-control"
              id=""
              aria-describedby="emailHelp"
            />
          </div>
          <div class="row">
            <!-- <div class="col-6">
                    <b class="mx-1">Exp Date</b>
                    <select
                      class="form-select form-select-lg mb-3 my-1"
                      aria-label=".form-select-lg example"
                      style={{ height: "2vw" }}
                    >
                      <option selected></option>
                      {option.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div> -->
            <!-- <div class="col-6">
                    <b class="mx-1">Exp year</b>
                    <select
                      class="form-select form-select-lg mb-3 my-1"
                      aria-label=".form-select-lg example"
                      style={{ height: "2vw" }}
                    >
                      <option selected></option>
                      {year.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div> -->
          </div>
          <div class="col-6">
            <b class="mx-1">CVV</b>
            <input
              bind:value={cardDetails.cvv}
              type="number"
              class="form-control"
              aria-describedby="emailHelp"
              placeholder="eg. 123"
            />
          </div>
        </div>
        <button type="submit" on:click={handleSubmit} class="checkOutBtn">
          Place Order ${$grossTotal}
        </button>
      </div>
    </div>
  </form>
</div>
