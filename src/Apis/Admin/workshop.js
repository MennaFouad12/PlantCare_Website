import axios from "axios";

export async function getWorkShop() {
  try {
    const token = localStorage.getItem("userToken");
    if (!token) throw new Error("User token not found. Please log in.");

    const { data } = await axios.get(
      `http://plantcareapi.runasp.net/api/WorkShop/GetAllWorkshopsForAdmin`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log('[GET WorkShop] Data:', data);
    return data;
  } catch (err) {
    console.error("[GET WorkShop] Error:", err);
    throw err;
  }
}

export const addWorkShop = async (formData) => {
  try {
    const token = localStorage.getItem("userToken");
    if (!token) throw new Error("User token not found. Please log in.");

    const response = await axios.post(
      `http://plantcareapi.runasp.net/api/WorkShop/AddWorkshop`,
      //   "http://plantcareapi.runasp.net/api/Blog",
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );

    console.log("[ADD Workshop] Response:", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "[ADD Workshop] Failed:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const updateWorkShop = async (id, formData) => {
  try {
    const token = localStorage.getItem("userToken");
    if (!token) throw new Error("User token not found. Please log in.");

    const response = await axios.put(
      `http://plantcareapi.runasp.net/api/WorkShop/UpdateWorkshop/${id}`,
      //   `http://plantcareapi.runasp.net/api/Blog/${id}`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );

    console.log("[UPDATE Workshop] Response:", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "[UPDATE Workshop] Failed:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const deleteWorkShop = async (id) => {
  try {
    const token = localStorage.getItem("userToken");
    if (!token) throw new Error("User token not found. Please log in.");

    const response = await axios.delete(
      `http://plantcareapi.runasp.net/api/WorkShop/RemoveWorkshop/${id}`,
      //   `http://plantcareapi.runasp.net/api/Blog/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log("[DELETE Workshop] Response:", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "[DELETE Workshop] Failed:",
      error.response?.data || error.message
    );
    throw error;
  }
};
