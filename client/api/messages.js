import axios from "axios";
import { API_BASE_URL, CREDENTIALS } from "./apiConstant";
const api = `${API_BASE_URL}/api/contacts`;
const messageApi = `${API_BASE_URL}/api/messages`;

export const getAllContacts = async () => {
  try {
    const { status, data } = await axios.get(`${api}`, CREDENTIALS);
    return { status, data };
  } catch (error) {
    console.log(error);
    if (!error.response) return null;
    return { error: error.response.data, status: error.response.status };
  }
};
export const getMessages = async (id) => {
  try {
    const { status, data } = await axios.get(
      `${messageApi}/${id}`,
      CREDENTIALS
    );
    return { status, data };
  } catch (error) {
    console.log(error);
    if (!error.response) return null;
    return { error: error.response.data, status: error.response.status };
  }
};
export const addMessage = async (id, message) => {
  try {
    const { status, data } = await axios.post(
      `${messageApi}/${id}`,
      { id, message },
      CREDENTIALS
    );
    return { status, data };
  } catch (error) {
    console.log(error);
    if (!error.response) return null;
    return { error: error.response.data, status: error.response.status };
  }
};
