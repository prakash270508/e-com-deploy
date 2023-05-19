<script>
  import { userData } from "../../../lib/auth";
  export let data;
  import axios from "axios";
  import Cookies from "js-cookie";

  const token = Cookies.get("user_Token");

  const id = data.id;

  let status = data.order.orderStatus;
  const { city, usersName, state, country, pinCode } = data.order.shippingInfo;

  const handleClick = async (e) => {
    status = e.target.value;

    const response = await axios.post(
      `http://localhost:4000/order/order-status`,
      { id, status },
      {
        headers: {
          Authorization: token,
        },
      }
    );

    console.log(response.data);
  };

  const getBadgeCss = () => {
    if (status == "ordered") {
      return "danger";
    } else if (status == "shipped") {
      return "warning";
    } else {
      return "success";
    }
  };
</script>

<div style="margin-top: 5vw;">
  <div class="container">
    <h1 class="text-center"><b>Order Details</b></h1>
    <span class={`badge badge1 bg-${getBadgeCss()}`}>{status}</span>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Sr no</th>
          <th scope="col">Image</th>
          <th scope="col">Name</th>
          <th scope="col">Price</th>
          <th scope="col">Quantity</th>
        </tr>
      </thead>
      {#each data.order.oderItems as order, index}
        <tbody>
          <tr>
            <th scope="row">{index + 1}</th>
            <td><img src={order.image} height="70" alt="" /></td>
            <td>{order.name}</td>
            <td>${order.price}</td>
            <td>{order.quantity}</td>
          </tr>
        </tbody>
      {/each}
    </table>

    <div class="float-right">
      {#if $userData.isLoggedin && $userData.user.isAdmin}
        <button
          value="ordered"
          on:click={handleClick}
          class={`btn btn-${
            status == "ordered" ? "danger" : "outline-secondary"
          }`}>Ordered</button
        >
        <button
          value="shipped"
          on:click={handleClick}
          class={`btn btn-${
            status == "shipped" ? "warning" : "outline-secondary"
          }`}>Shipped</button
        >
        <button
          value="delivered"
          on:click={handleClick}
          class={`btn btn-${
            status == "delivered" ? "success" : "outline-secondary"
          }`}>Delivered</button
        >
      {:else}
        OrderStatus :-<div class={`badge bg-${getBadgeCss()} mx-2`}>{status}</div>
      {/if}
    </div>
    <div class="">
      <div><b>{usersName}</b> ,</div>
      <div>{city} {state} , {country}</div>
      <div>Pincode :- <b>{pinCode}</b></div>
    </div>
  </div>
</div>

<style>
  .badge1 {
    position: absolute;
    margin-top: -3vw;
    margin-left: 51vw;
  }
</style>
