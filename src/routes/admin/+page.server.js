import axios from 'axios'

export async function load({ cookies }) {
  const token = cookies.get("user_Token");

  const allUser = await axios.get(`https://server-1.vercel.app/user/allUsers`, {
    headers : {
        Authorization : token
    }
  })

  const allOrder = await axios.get(`https://server-1.vercel.app/order/admin/getAllOrders`, {
    headers : {
        Authorization : token
    }
  })

  return {
    allUsers : allUser.data ,
    allOrders : allOrder.data.orders

  }

}
