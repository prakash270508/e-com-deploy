const PORT = import.meta.env.VITE_PORT;
import {userData} from '../lib/auth'
import {cartItems} from '../lib/cart'

console.log(PORT);

export function load({ cookies }) {
  const visited = cookies.get("token");

  // console.log(cookies.get("token"))
  // console.log(cookies.get("user_token"))

  return {
    visited,
  };
}
