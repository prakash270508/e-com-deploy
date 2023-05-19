<script>
  import { cartItems } from "../../lib/cart";
  import { userData } from "../../lib/auth";
  import { goto } from "$app/navigation";
  import axios from "axios";
  import Cookies from "js-cookie";

  let totalCartItems = 0;

  cartItems.subscribe((prev) => (totalCartItems = prev.length));

  const handleLogout = async () => {
    try {
      const response = await axios.post("http://localhost:4000/auth/logout");

      Cookies.remove("user_Token");

      userData.update((preValue) => {
        preValue.user = null;
        preValue.isLoggedin = false;
        return preValue;
      });

      alert(response.data.message);
      goto("/");
    } catch (error) {
      return alert(error);
    }
  };
</script>

<nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid mx-5">
    <h2 class="navbar-brand mx-5">Shopooo</h2>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0" style="margin-left: 5vw;">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href={"/"}> Home </a>
        </li>
        {#if $userData.isLoggedin && $userData.user.isAdmin}
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href={"/admin"}> Admin </a>
          </li>
        {/if}
      </ul>
      <div class="d-flex mx-5">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a
              class="nav-link"
              title="Search"
              aria-current="page"
              href="/search"
            >
              <i class="fa fa-search" aria-hidden="true" />
            </a>
          </li>
          <li class="nav-item mx-4">
            {#if !$userData.isLoggedin}
              <a href={"/login"} class="nav-link" aria-current="page">
                <i class="fa fa-user" aria-hidden="true" />
              </a>
            {:else}
              <p
                class="nav-link"
                aria-current="page"
                title="Logout"
                style="cursor: pointer;"
              >
                <i
                  class="fa fa-sign-out"
                  aria-hidden="true"
                  on:click={() => handleLogout()}
                  on:keypress={(e) => {
                    if (e.key === "Enter") handleLogout();
                  }}
                />
              </p>
            {/if}
          </li>
          <li class="nav-item d-flex" title="Cart">
            <a href={"/cart"} class="nav-link" aria-current="page">
              <i class="fas fa-shopping-cart" />
            </a>
            <div style=" margin-left: -10px" class="text-muted">
              {#if totalCartItems > 0}
                {totalCartItems}
              {/if}
            </div>
          </li>
          {#if $userData.isLoggedin}
            <li
              class="nav-item d-flex"
              style=" margin-left: 17px"
              title="Your-orders"
            >
              <a href={"/your-order"} class="nav-link" aria-current="page">
                <i class="fas fa-shipping-fast" />
              </a>
            </li>
          {/if}
        </ul>
      </div>
    </div>
  </div>
</nav>
