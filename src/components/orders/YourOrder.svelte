<script>
  export let product;
  const {
    oderItems,
    totalPrice,
    orderStatus,
    _id,
    createdAt,
  } = product;

  const dateString = createdAt;
  const date = dateString.substring(0, 10);

  let status = orderStatus; // Replace with the actual order status from your data

  function getClassBystatus() {
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

<div>
  <div class={`card mb-3 alert-${getClassBystatus()}`} style="color:black">
    <div class="card-body">
      <div class="d-flex justify-content-between">
        <div class="d-flex flex-column align-items-center">
          <div>
            <b>{_id}</b>
          </div>
          <div class="my-2">
            Ordered on :- {date}
          </div>
        </div>
        <div class="d-flex flex-row align-items-center">
          <h4 class="d-flex" style="margin-right: 6vw;">
            {oderItems && oderItems.length}
          </h4>
          <div>
            <h5 class="mb-0" style="margin-left: 15vw;">${totalPrice}</h5>
          </div>
          <div class="d-flex" style="margin-left: 15vw;">
            <h5 class="mb-0">{orderStatus.toUpperCase()}</h5>
            <h5 class="mb-0 mx-4">
              <a href={`your-order/${_id}`}>
                <i class="fa fa-eye text-dark" title="View Details" aria-hidden="true" />
              </a>
            </h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
