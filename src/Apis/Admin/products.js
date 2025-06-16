import axios from "axios";

export async function getAdminProducts() {
  try {
    const token = localStorage.getItem('userToken');
    // const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJtYXJ3YWFzYW15eTlAZ21haWwuY29tIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZWlkZW50aWZpZXIiOiI1NDQ4NDRhZC0zZTdmLTQwZTUtYjQ5MS03OTE2NDdjNGE4ZjAiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiQWRtaW4iLCJGdWxsTmFtZSI6Ik1hcndhIFNhbXkiLCJqdGkiOiIzYmNmNzQ1My0xN2M0LTQxYWUtYTNmMi02OWEyODA3MjVhZjkiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBZG1pbiIsImV4cCI6MTc0NTA0OTg1MCwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo3Mjc2LyIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC8ifQ.S_mB1szGcYHeqyFZRGAC5D0epp-b26j3zIGJxeVtG-8"

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



export const addProduct = async (values) => {
  try {
    const token = localStorage.getItem('userToken');
    // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJtYXJ3YWFzYW15eTlAZ21haWwuY29tIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZWlkZW50aWZpZXIiOiI1NDQ4NDRhZC0zZTdmLTQwZTUtYjQ5MS03OTE2NDdjNGE4ZjAiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiQWRtaW4iLCJGdWxsTmFtZSI6Ik1hcndhIFNhbXkiLCJqdGkiOiI1MzJjMmYwMS1jYWE2LTQyYjItYTdhZC1jMGMwZmQ0NjQ1Y2MiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBZG1pbiIsImV4cCI6MTc0NTA4MzA2NSwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo3Mjc2LyIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC8ifQ.N35MP7fpeQGw-CeI5UR3-M9qWofPnQ4j5hkzyctvNPw"; // Replace with your actual token

  
    const response = await axios.post(
      "http://plantcareapi.runasp.net/api/Product/AddProduct",
      values,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error(" Upload failed:", error.response?.data || error.message);
    throw error;
  }
};




export const updateProduct = async (values,id) => {
  try {
    // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJtYXJ3YWFzYW15eTlAZ21haWwuY29tIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZWlkZW50aWZpZXIiOiI1NDQ4NDRhZC0zZTdmLTQwZTUtYjQ5MS03OTE2NDdjNGE4ZjAiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiQWRtaW4iLCJGdWxsTmFtZSI6Ik1hcndhIFNhbXkiLCJqdGkiOiI1MzJjMmYwMS1jYWE2LTQyYjItYTdhZC1jMGMwZmQ0NjQ1Y2MiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBZG1pbiIsImV4cCI6MTc0NTA4MzA2NSwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo3Mjc2LyIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC8ifQ.N35MP7fpeQGw-CeI5UR3-M9qWofPnQ4j5hkzyctvNPw"; // Replace with your actual token

    const token = localStorage.getItem('userToken');
    const response = await axios.put(
      `http://plantcareapi.runasp.net/api/Product/UpdateProduct/${id}`,
      values,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );
console.log("Response update Data:", response.data);
    return response.data;
  } catch (error) {
    console.error(" Upload failed:", error.response?.data || error.message);
    throw error;
  }
};



export const deleteProduct = async (id) => {
  try {
    // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJtYXJ3YWFzYW15eTlAZ21haWwuY29tIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZWlkZW50aWZpZXIiOiI1NDQ4NDRhZC0zZTdmLTQwZTUtYjQ5MS03OTE2NDdjNGE4ZjAiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiQWRtaW4iLCJGdWxsTmFtZSI6Ik1hcndhIFNhbXkiLCJqdGkiOiI1MzJjMmYwMS1jYWE2LTQyYjItYTdhZC1jMGMwZmQ0NjQ1Y2MiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBZG1pbiIsImV4cCI6MTc0NTA4MzA2NSwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo3Mjc2LyIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC8ifQ.N35MP7fpeQGw-CeI5UR3-M9qWofPnQ4j5hkzyctvNPw"; // Replace with your actual token
    const token = localStorage.getItem('userToken');
  
    const response = await axios.delete(
      `http://plantcareapi.runasp.net/api/Product/DeleteProduct/${id}`,
      
      {
        headers: {
          Authorization: `Bearer ${token}`,
          
        },
      }
    );
console.log("Response update Data:", response.data);
    return response.data;
  } catch (error) {
    console.error(" Upload failed:", error.response?.data || error.message);
    throw error;
  }
};



