import axios from "axios";

export async function load({ cookies, params }) {
  const token = cookies.get("user_Token");

  const orderResponse = await axios.get(
    `http://localhost:4000/order/${params.orderId}`,
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
