import axios from "axios";

export async function getProducts() {
  try {
    const token = localStorage.getItem('userToken');
    

    const { data } = await axios.get(`http://plantcareapi.runasp.net/api/Product/GetAll`, {
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


export async function getSingleProducts(id) {
  try {
    const token = localStorage.getItem('userToken');
    

    const { data } = await axios.get(`http://plantcareapi.runasp.net/api/Product/GetProductById/${id}`, {
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




