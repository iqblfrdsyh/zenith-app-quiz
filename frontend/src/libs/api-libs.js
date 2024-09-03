import axios from "axios";

// const base_url = process.env.NEXT_PUBLIC_BASE_API_URL;
const base_url = "http://localhost:6543";

export async function getAllData(endpoint) {
  try {
    const response = await axios.get(`${base_url}/api/v1/${endpoint}`);
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

export async function update(endpoint, categoryId, datas) {
  try {
    const response = await axios.put(
      `${base_url}/api/v1/${endpoint}?id=${categoryId}`,
      datas
    );
    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data?.msg || "An error occurred";
    throw new Error(errorMessage);
  }
}
