<script>
  import axios from "axios";
  import { goto } from "$app/navigation";

  let email = "";
  let password = "";
  let username = "";

  async function handleSubmit() {
    if (!email || !password || !username) {
      return alert("Please fill all details");
    }
    const data = { email, password, username };
    console.log(data)
    try {
      const response = await axios.post(
        "http://localhost:4000/auth/register",
        data
      );

      email = "";
      password = "";
      username = "";

      await alert(response.data.message);
    } catch (error) {
      return alert(error.response.data.message);
    }
    goto("/login");
  }
</script>

<div class="container">
  <div class="row">
    <div class="col-6 mx-4" style="margin-top: 6vw;">
      <h3>
        <b>Sign up</b>
      </h3>
      <br />
      <br />
      <form on:submit|preventDefault={handleSubmit}>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            <b>Email address</b>
          </label>
          <input
            bind:value={email}
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Email"
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
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
            placeholder="Password"
          />
        </div>
        <div class="d-flex">
          <a class="mx-5 my-5 links" href="/login"> Login to your account </a>
          <button type="submit" class="checkOutBtn my-3">
            <b>Sign up</b>
          </button>
        </div>
      </form>
      <br />
      <div class="d-flex">
        <a class=" my-5 links" href="/">Terms & Conditions</a>
        <a class="mx-5 my-5 links" href="/">Privacy Policy</a>
      </div>
    </div>
    <div class="col-5">
      <img
        src="https://flatlogic-ecommerce.herokuapp.com/_next/static/media/bg.e83c840a2831e55145412c04bccf85a6.png"
        alt=""
      />
    </div>
  </div>
</div>
