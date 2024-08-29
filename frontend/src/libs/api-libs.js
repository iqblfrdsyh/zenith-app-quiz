import axios from "axios";

// const base_url = process.env.NEXT_PUBLIC_BASE_API_URL;
const base_url = "http://localhost:6543";

export async function getAllData(endpoint) {
  try {
    const response = await axios.get(`${base_url}/api/v1/${endpoint}`);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
}
