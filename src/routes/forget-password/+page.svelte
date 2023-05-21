<script>
  import axios from "axios";
  import { goto } from "$app/navigation";

  let email = "";

  const handleSubmit = async () => {
    if (!email) {
      return alert("Please enter your email");
    }

    try {
      const response = await axios.post(
        "https://server-1.vercel.app/auth/forget-password",
        {email}
      );

      email = ''

      alert(response.data.message)

      goto('/email-sent')



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
          <input
            type="email"
            bind:value={email}
            id="typeEmail"
            placeholder="Enter email"
            class="form-control my-3"
          />
          <label class="form-label" for="typeEmail">Email input</label>
        </div>
        <button
          type="submit"
          on:submit={handleSubmit}
          class="btn viewBtn my-4 w-100"
          >Send email
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
