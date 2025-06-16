import axios from "axios";

// getPostsWithComments

export async function getPostsWithComments() {
  try {
    const token = localStorage.getItem("userToken");
    const { data } =await axios.get(
      `http://plantcareapi.runasp.net/api/Community/get-posts-with-comments`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log("Data:", data);
    return data;
  } catch (err) {
    console.error(" Error:", err);
    console.log("Full Error Response:", err?.response);
    return err?.message;
  }
}

// Add Posts

export const addPosts = async (values) => {
  try {
    const token = localStorage.getItem("userToken");
    const formData = new FormData();
    formData.append("PostContent", values.PostContent);
    if (values.imageFile) {
      formData.append("ImageFile", values.imageFile); // direct File append
    }

    const response = axios.post(
      `http://plantcareapi.runasp.net/api/Community/add-post`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          
        },
      }
    );
    return (await response).data;
  } catch (error) {
    console.error(" Upload failed:", error.response?.data || error.message);
    throw error;
  }
};

// addComment

export const addComment = async (values) => {
  try {
    const token = localStorage.getItem("userToken");

    const response = axios.post(
      `http://plantcareapi.runasp.net/api/Community/add-comment`,
      values,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return (await response).data;
  } catch (error) {
    console.error(" Upload failed:", error.response?.data || error.message);
    throw error;
  }
};

// addLike

export const addLike = async (id) => {
  try {
    // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJtYXJ3YWFzYW15eTlAZ21haWwuY29tIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZWlkZW50aWZpZXIiOiI1NDQ4NDRhZC0zZTdmLTQwZTUtYjQ5MS03OTE2NDdjNGE4ZjAiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiQWRtaW4iLCJGdWxsTmFtZSI6Ik1hcndhIFNhbXkiLCJqdGkiOiI1MzJjMmYwMS1jYWE2LTQyYjItYTdhZC1jMGMwZmQ0NjQ1Y2MiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBZG1pbiIsImV4cCI6MTc0NTA4MzA2NSwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo3Mjc2LyIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC8ifQ.N35MP7fpeQGw-CeI5UR3-M9qWofPnQ4j5hkzyctvNPw"; // Replace with your actual token

  const token = localStorage.getItem("userToken");
console.log("Token:", token); // Add this line
    const response = await axios.post(
      `http://plantcareapi.runasp.net/api/Community/add-like/${id}`,
    {},
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

// add disLike

export const addDisLike = async ( id) => {
  try {
    // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJtYXJ3YWFzYW15eTlAZ21haWwuY29tIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZWlkZW50aWZpZXIiOiI1NDQ4NDRhZC0zZTdmLTQwZTUtYjQ5MS03OTE2NDdjNGE4ZjAiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiQWRtaW4iLCJGdWxsTmFtZSI6Ik1hcndhIFNhbXkiLCJqdGkiOiI1MzJjMmYwMS1jYWE2LTQyYjItYTdhZC1jMGMwZmQ0NjQ1Y2MiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBZG1pbiIsImV4cCI6MTc0NTA4MzA2NSwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo3Mjc2LyIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC8ifQ.N35MP7fpeQGw-CeI5UR3-M9qWofPnQ4j5hkzyctvNPw"; // Replace with your actual token

    const token = localStorage.getItem("userToken");
    const response = await axios.post(
      `http://plantcareapi.runasp.net/api/Community/add-dislike/${id}`,
      {},
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


export const removeReactionApi = async ( id) => {
  try {
    // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJtYXJ3YWFzYW15eTlAZ21haWwuY29tIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZWlkZW50aWZpZXIiOiI1NDQ4NDRhZC0zZTdmLTQwZTUtYjQ5MS03OTE2NDdjNGE4ZjAiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiQWRtaW4iLCJGdWxsTmFtZSI6Ik1hcndhIFNhbXkiLCJqdGkiOiI1MzJjMmYwMS1jYWE2LTQyYjItYTdhZC1jMGMwZmQ0NjQ1Y2MiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBZG1pbiIsImV4cCI6MTc0NTA4MzA2NSwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo3Mjc2LyIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC8ifQ.N35MP7fpeQGw-CeI5UR3-M9qWofPnQ4j5hkzyctvNPw"; // Replace with your actual token

    const token = localStorage.getItem("userToken");
    const response = await axios.post(
      `http://plantcareapi.runasp.net/api/Community/delete-reaction/${id}`,
      {},
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

// Edit Post



export const EditPost = async (values, id) => {
  try {
    const token = localStorage.getItem("userToken");

    const response = await axios.put(
      `http://plantcareapi.runasp.net/api/Community/edit-post/${id}`,
      values,
      {
        headers: {
          Authorization: `Bearer ${token}`,
           "Content-Type": "multipart/form-data"
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



// Edit Comment

export const EditComment = async (values, id) => {
  try {
    // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJtYXJ3YWFzYW15eTlAZ21haWwuY29tIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZWlkZW50aWZpZXIiOiI1NDQ4NDRhZC0zZTdmLTQwZTUtYjQ5MS03OTE2NDdjNGE4ZjAiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiQWRtaW4iLCJGdWxsTmFtZSI6Ik1hcndhIFNhbXkiLCJqdGkiOiI1MzJjMmYwMS1jYWE2LTQyYjItYTdhZC1jMGMwZmQ0NjQ1Y2MiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBZG1pbiIsImV4cCI6MTc0NTA4MzA2NSwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo3Mjc2LyIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC8ifQ.N35MP7fpeQGw-CeI5UR3-M9qWofPnQ4j5hkzyctvNPw"; // Replace with your actual token

    const token = localStorage.getItem("userToken");
    const response = await axios.put(
      `http://plantcareapi.runasp.net/api/Community/edit-comment/${id}`,
      values,
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

// delete Post

export const deletePost = async (id) => {
  try {
    const token = localStorage.getItem("userToken");

    const response = await axios.delete(
      `http://plantcareapi.runasp.net/api/Community/delete-post/${id}`,

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

// delete Commnet

export const deleteComment = async (id) => {
  try {
    const token = localStorage.getItem("userToken");

    const response = await axios.delete(
      `http://plantcareapi.runasp.net/api/Community/delete-comment/${id}`,

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
