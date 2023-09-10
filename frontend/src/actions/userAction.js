import axios from "axios";
import { USER_LOGIN_REQUEST } from "../constants/userContent.js";
import { USER_LOGIN_SUCCESS } from "../constants/userContent.js";
import { USER_LOGIN_FAIL } from "../constants/userContent.js";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });
    const config = { headers: { "content-Type": "application/json" } };
    const { data } = await axios.post(
      "http://localhost:8000/api/users/login",
      { email, password },
      config
    );
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
