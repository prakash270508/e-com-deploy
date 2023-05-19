import axios from "axios";

export async function load({ cookies, params }) {
  const token = cookies.get("user_Token");

  const orderResponse = await axios.get(
    `https://server-1.vercel.app/order/${params.orderId}`,
    {
      headers: {
        Authorization: token,
      },
    }
  );

  return {
    order : orderResponse.data,
    id : params.orderId
  };
}
