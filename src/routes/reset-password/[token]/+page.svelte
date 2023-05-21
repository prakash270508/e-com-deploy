<script>
  import axios from "axios";
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";

  const token = $page.params.token;

  let password = "";
  let repeatPassword = "";

  const handleSubmit = async () => {
    if (!password || !repeatPassword) {
      return alert("Please enter your all details");
    }
    if (password !== repeatPassword) {
      return alert("Email and repeat password not matched");
    }

    try {
      const response = await axios.post(
        `https://server-1.vercel.app/auth/reset-password/${token}`,
        { password, repeatPassword }
      );

      password = "";
      repeatPassword = "";

      alert(response.data.message);

      goto("/login");
    } catch (error) {
      return alert(error.response.data.message);
    }
  };
</script>

<div style="margin-top: 7vw; margin-left:40%; margin-bottom: 7vw;">
  <div class="card text-center" style="width: 300px;">
    <div class="card-header h5 text-white" style="background-color: #bd744c;">
      Password Reset
    </div>
    <div class="card-body px-5">
      <p class="card-text py-2">
        Enter your email address and we'll send you an email with instructions
        to reset your password.
      </p>
      <form on:submit={handleSubmit}>
        <div class="form-outline">
          <label class="form-labe" style="float: left;" for="typepassword"
            ><b>Password</b></label
          >
          <input
            type="password"
            bind:value={password}
            id="typepassword"
            placeholder="Enter email"
            class="form-control my-3"
          />
        </div>
        <div class="form-outline">
          <label class="form-label" style="float: left;" for="typepassword"
            ><b>Repeat Password</b></label
          >
          <input
            type="password"
            bind:value={repeatPassword}
            id="typepassword"
            placeholder="Repeat Password"
            class="form-control my-3"
          />
        </div>
        <button
          type="submit"
          on:submit={handleSubmit}
          class="btn viewBtn my-4 w-100"
          >Reset password
        </button>
      </form>
      <div class="d-flex justify-content-between mt-4">
        <a class=" link" href="/login">Login</a>
        <a class=" link" href="/register">Register</a>
      </div>
    </div>
  </div>
</div>

<style>
  .link {
    color: black;
  }
  .link:hover {
    color: #bd744c;
  }
</style>
