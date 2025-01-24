import axios from "axios";
import { API_BASE_URL, CREDENTIALS } from "./apiConstant";

const url = `${API_BASE_URL}/api/auth`;
export async function signup(email, password) {
  try {
    const { status, data } = await axios.post(
      `${url}/signup`,
      {
        email,
        password,
      },
      CREDENTIALS
    );

    return { status, data };
  } catch (err) {
    console.log(err);
    if (!err.response) return null;
    return { status: err.response.status, message: err.response.data };
  }
}

export async function login(username, password) {
  try {
    const { status, data } = await axios.post(
      `${url}/login`,
      {
        username,
        password,
      },
      CREDENTIALS
    );

    return { status, data };
  } catch (err) {
    console.log(err);
    if (!err.response) return null;
    return { status: err.response.status, message: err.response.data };
  }
}

export async function isLoggedIn() {
  try {
    const { status, data } = await axios.get(`${url}/isLoggedIn`, CREDENTIALS);

    return { status, data };
  } catch (err) {
    console.log(err);
    if (!err.response) return null;
    return { status: err.response.status, message: err.response.data };
  }
}
