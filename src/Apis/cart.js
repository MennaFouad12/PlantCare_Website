
//add to cart
import axios from "axios";


let baseUrl = `http://plantcareapi.runasp.net/api/Cart`

// let token = localStorage.getItem('userToken')

export function addToCartApi(productId,quantity=1) {
  try {
    const token = localStorage.getItem('userToken');
    

    const { data } = axios.post(`${baseUrl}/AddToCart`, { productId,quantity }, {
      headers: {
          Authorization: `Bearer ${token}`
      }
  })

    console.log("Data:", data);
    return data;
  } catch (err) {
    console.error(" Error:", err);
    console.log("Full Error Response:", err?.response);
    return err?.message;
  }
}

/////get cart

export async function getCartApi() {
  try {
    const token = localStorage.getItem('userToken');
    

    const { data } = await axios.get(`http://plantcareapi.runasp.net/api/Cart/GetAllCartItems`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    console.log("Data:", data);
    return data;
  } catch (err) {
    console.error(" Error:", err);
    console.log("Full Error Response:", err?.response);
    return err?.message;
  }
}

//delete item
export async function deleteCartApi(id) {
  try {
    const token = localStorage.getItem('userToken');
    

    const { data } = await axios.delete(`${baseUrl}/RemoveItem/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    console.log("Data:", data);
    return data;
  } catch (err) {
    console.error(" Error:", err);
    // console.log("Full Error Response:", err?.response);
    console.error("Error deleting cart item:", err?.response?.data || err.message);
    // throw err?.response?.data || new Error("Unknown delete error");
    return err?.message;
  }
}


// In your Apis/cart.js file
// export async function deleteCartApi(id) {
//   try {
//     const token = localStorage.getItem('userToken');
//     if (!token) {
//       throw new Error('No authentication token found');
//     }

//     const response = await axios.delete(
//       `${baseUrl}/RemoveItem/${id}`, 
//       {
//         headers: {
//           'Authorization': `Bearer ${token}`,
//           'Content-Type': 'application/json'
//         }
//       }
//     );

//     // Ensure the API is returning proper response
//     if (response.status !== 200) {
//       throw new Error(`Delete failed with status ${response.status}`);
//     }

//     return response.data;
//   } catch (error) {
//     console.error('Delete API Error:', {
//       message: error.message,
//       response: error.response?.data,
//       status: error.response?.status
//     });
//     throw error; // Important to re-throw for mutation to catch
//   }
// }

// In your Apis/cart.js
// export async function deleteCartApi(id) {
//   try {
//     // Extract just the numeric part if needed
//     const itemId = id.split('_')[0]; // Gets "4" from "4_400"
    
//     const token = localStorage.getItem('userToken');
//     const response = await axios.delete(
//       `${baseUrl}/api/Cart/RemoveItem/${itemId}`, 
//       {
//         headers: {
//           'Authorization': `Bearer ${token}`,
//           'Content-Type': 'application/json'
//         }
//       }
//     );
//     return response.data;
//   } catch (error) {
//     console.error('Delete API Error:', error.response?.data || error.message);
//     throw error;
//   }
// }


export async function updateCartApi({ id, quantity }) {
  try {
    const token = localStorage.getItem('userToken');

    const { data } = await axios.put(`${baseUrl}/UpdateCartItem/${id}?NewQuantity=${quantity}`, null, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    });

    console.log("Updated Data:", data);
    return data;
  } catch (err) {
    console.error("Error:", err);
    return err?.message;
  }
}

//clear item
// export function clearCartApi() {
//     const token = localStorage.getItem('userToken')
//     return axios.delete(`${baseUrl}/cart`, {
//         headers: {
//             token
//         }
//     })
// }
//update item
