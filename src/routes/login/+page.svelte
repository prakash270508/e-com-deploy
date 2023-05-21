<script>
  import axios from "axios";
  import { userData } from "../../lib/auth";
  import Cookies from "js-cookie";
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";

  let password = "";
  let username = "";

  async function handleSubmit() {
    if (!username || !password) {
      return alert("Please fill all details");
    }
    const data = { username, password };
    try {
      const response = await axios.post(
        "https://server-1.vercel.app/auth/login",
        data
      );

      Cookies.set("user_Token", response.data.token, { expires: 30 });

      username = "";
      password = "";

      userData.update((preValue) => {
        preValue.user = response.data.user;
        preValue.isLoggedin = true;
        return preValue;
      });

      goto("/");

      alert(response.data.message);
    } catch (error) {
      return alert(error.response.data.message);
    }
  }

  onMount(()=>{
    if($userData.isLoggedin){
      goto('/')
    }
  })

</script>

<div class="container">
  <div class="row">
    <div class="col-6 mx-4" style="margin-top: 8vw;">
      <h3>
        <b>Login</b>
      </h3>
      <br />
      <br />
      <form on:submit|preventDefault={handleSubmit}>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            <b>Username</b>
          </label>
          <input
            bind:value={username}
            type="text"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Username"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            <b>Password</b>
          </label>
          <input
            bind:value={password}
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Your Password"
          />
        </div>
        <div class="d-flex">
          <a class="mx-5 my-5 links" href="/register">Create an account</a>
          <button type="submit" class="checkOutBtn my-3">
            <b>Login</b>
          </button>
        </div>
      </form>
      <br />
      <br />
      <br />
      <div class="d-flex">
        <a class=" my-5 links" href="/">Terms & Conditions</a>
        <a class="mx-5 my-5 links" href="/">Privacy Policy</a>
        <a class=" my-5 links" href="forget-password">Forgot password</a>
      </div>
    </div>
    <div class="col-5">
      <img
        src="	https://flatlogic-ecommerce.herokuapp.com/_next/static/media/bg.906ad1378ec90ffcd11843d18652d6ed.svg"
        alt=""
      />
    </div>
  </div>
</div>
