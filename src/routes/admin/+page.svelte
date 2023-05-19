<script>
  let selected = "allUser";

  export let data;

  let allUserList = data.allUsers;
  let allOrderList = data.allOrders;

function getClassBystatus(status) {

  if (status === "ordered") {
    return "danger";
  } else if (status === "shipped") {
    return "warning";
  } else if (status === "delivered") {
    return "success";
  } else {
    return "";
  }
}

</script>

<div style="margin-top: 4.7vw;">
  <div class="row">
    <div class="col-2" style="background-color: blue;">
      <div class="p-5">
        <p
          class={selected === "allUser" ? "selected" : "normal"}
          on:click={() => (selected = "allUser")}
          on:keypress={(e) => {
            if (e.key === "Enter") selected = "allUser";
          }}
        >
          All user
        </p>
        <p
          class={selected === "allOrder" ? "selected" : "normal"}
          on:click={() => (selected = "allOrder")}
          on:keypress={(e) => {
            if (e.key === "Enter") selected = "allOrder";
          }}
        >
          All order
        </p>
      </div>
    </div>
    {#if selected == "allOrder"}
      <div class="col-10" style="margin-left: -0.8vw;">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">SR No.</th>
              <th scope="col">User</th>
              <th scope="col">No of Products</th>
              <th scope="col">Total Price</th>
              <th scope="col">Delivery Status</th>
              <th scope="col">View</th>
            </tr>
          </thead>
          <tbody>
            {#each allOrderList as order, index}
              <tr class={`col-10 alert-${getClassBystatus(order.orderStatus)}`}>
                <th scope="row">{index + 1}</th>
                <td>{order.userName}</td>
                <td>{order.oderItems.length}</td>
                <td>${order.totalPrice}</td>
                <td>{order.orderStatus}</td>
                <td
                  ><a href={`/your-order/${order._id}`} class="btn btn-primary"
                    >View status</a
                  ></td
                >
              </tr>
            {/each}
          </tbody>
        </table>
      </div>
    {/if}
    {#if selected == "allUser"}
      <div class={`col-10`} style="margin-left: -0.8vw;">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">SR No.</th>
              <th scope="col">Email</th>
              <th scope="col">Username</th>
              <th scope="col">No. Of Orders</th>
            </tr>
          </thead>
          <tbody>
            {#each allUserList as user, index}
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.email}</td>
                <td>{user.username}</td>
                <td>{user.noOfOrders}</td>
              </tr>
            {/each}
          </tbody>
        </table>
      </div>
    {/if}
  </div>
</div>

<style>
  .selected {
    color: white;
    text-decoration: underline;
    cursor: pointer;
  }
  .normal {
    color: black;
    cursor: pointer;
  }
</style>
