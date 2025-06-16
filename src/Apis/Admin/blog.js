import axios from "axios";

export async function getBlogPageProducts() {
  try {
    const token = localStorage.getItem("userToken");
    if (!token) throw new Error("User token not found. Please log in.");

    const { data } = await axios.get(
      `http://plantcareapi.runasp.net/api/Blog`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data;
  } catch (err) {
    console.error("[GET BLOG] Error:", err);
    throw err;
  }
}

export const addBlogPageProduct = async (formData) => {
  try {
    const token = localStorage.getItem("userToken");
    if (!token) throw new Error("User token not found. Please log in.");

    const response = await axios.post(
      "http://plantcareapi.runasp.net/api/Blog",
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );

    console.log("[ADD BLOG] Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("[ADD BLOG] Failed:", error.response?.data || error.message);
    throw error;
  }
};

export const updateBlogPageProduct = async (id, formData) => {
  try {
    const token = localStorage.getItem("userToken");
    if (!token) throw new Error("User token not found. Please log in.");

    const response = await axios.put(
      `http://plantcareapi.runasp.net/api/Blog/${id}`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );

    console.log("[UPDATE BLOG] Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("[UPDATE BLOG] Failed:", error.response?.data || error.message);
    throw error;
  }
};

export const deleteBlogPageProduct = async (id) => {
  try {
    const token = localStorage.getItem("userToken");
    if (!token) throw new Error("User token not found. Please log in.");

    const response = await axios.delete(
      `http://plantcareapi.runasp.net/api/Blog/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log("[DELETE BLOG] Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("[DELETE BLOG] Failed:", error.response?.data || error.message);
    throw error;
  }
};
