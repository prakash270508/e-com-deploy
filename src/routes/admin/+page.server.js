import axios from 'axios'

export async function load({ cookies }) {
  const token = cookies.get("user_Token");

  const allUser = await axios.get(`http://localhost:4000/user/allUsers`, {
    headers : {
        Authorization : token
    }
  })

  const allOrder = await axios.get(`http://localhost:4000/order/admin/getAllOrders`, {
    headers : {
        Authorization : token
    }
  })

  return {
    allUsers : allUser.data ,
    allOrders : allOrder.data.orders

  }

}
