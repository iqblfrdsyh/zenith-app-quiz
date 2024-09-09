import axios from "axios";

const base_url = process.env.NEXT_PUBLIC_BASE_API_URL;
const apikey = process.env.NEXT_PUBLIC_ZEN_APIKEY;

export async function getData(endpoint) {
  try {
    const response = await axios.get(`${base_url}/api/v1/${endpoint}`, {
      headers: {
        apikey,
      },
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data?.msg || "An error occurred";
    throw new Error(errorMessage);
  }
}
export async function getDataByParams(endpoint, params) {
  try {
    const response = await axios.get(
      `${base_url}/api/v1/${endpoint}?${params}`,
      {
        headers: {
          apikey,
        },
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data?.msg || "An error occurred";
    throw new Error(errorMessage);
  }
}

export async function create(endpoint, datas) {
  try {
    const response = await axios.post(`${base_url}/api/v1/${endpoint}`, datas, {
      headers: {
        apikey,
      },
    });
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
      datas,
      {
        headers: {
          apikey,
        },
      }
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
      `${base_url}/api/v1/${endpoint}?id=${id}`,
      {
        headers: {
          apikey,
        },
      }
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
      headers: {
        apikey,
      },
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
      headers: {
        Authorization: `Bearer ${token}`,
        apikey,
      },
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data?.msg || "An error occurred";
    throw new Error(errorMessage);
  }
}
