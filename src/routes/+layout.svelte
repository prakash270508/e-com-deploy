<script>
  import axios from "axios";
  import { userData } from "../lib/auth";
  import Footer from "../components/home/Footer.svelte";
  import Navbar from "../components/home/Navbar.svelte";
  import "./index.css";
  import { onMount } from "svelte";
  import Cookies from 'js-cookie';

  const token = Cookies.get('user_Token');

  async function getUser() {
    try {
      const response = await axios.get("http://localhost:4000/auth/me", {
        headers: {
          Authorization: token
        }
      });

      userData.update((preValue) => {
        preValue.user = response.data;
        preValue.isLoggedin = true;
        return preValue;
      });
    } catch (error) {
      console.log(error);
    }
  }

  onMount(() => {
    if (token !== undefined && token !== null) {
      getUser();
    }
  });
</script>

<Navbar />
<slot />
<div style="margin-top: 3vw;">
  <Footer />
</div>
