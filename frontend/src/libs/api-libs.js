import axios from "axios";

// const base_url = process.env.NEXT_PUBLIC_BASE_API_URL;
const base_url = "http://localhost:6543";

export async function getData(endpoint) {
  try {
    const response = await axios.get(`${base_url}/api/v1/${endpoint}`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data?.msg || "An error occurred";
    throw new Error(errorMessage);
  }
}

export async function create(endpoint, datas) {
  try {
    const response = await axios.post(`${base_url}/api/v1/${endpoint}`, datas);
    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data?.msg || "An error occurred";
    throw new Error(errorMessage);
  }
}

export async function update(endpoint, id, datas) {
  try {
    const response = await axios.put(
      `${base_url}/api/v1/${endpoint}?${
        typeof id === "string" ? "userId" : "id"
      }=${id}`,
      datas
    );
    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data?.msg || "An error occurred";
    throw new Error(errorMessage);
  }
}

export async function deleteData(endpoint, id) {
  try {
    const response = await axios.delete(
      `${base_url}/api/v1/${endpoint}?id=${id}`
    );
    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data?.msg || "An error occurred";
    throw new Error(errorMessage);
  }
}

export async function auth(endpoint, data) {
  try {
    const response = await axios.post(`${base_url}/api/v1/${endpoint}`, data, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data?.msg || "An error occurred";
    throw new Error(errorMessage);
  }
}

export async function getDataUser(endpoint, token) {
  try {
    const response = await axios.get(`${base_url}/api/v1/${endpoint}`, {
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data?.msg || "An error occurred";
    throw new Error(errorMessage);
  }
}
