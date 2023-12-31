import axios from "axios";
import {
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_FAIL,
} from "../constants/orderContent";

export const createOrder = (order) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ORDER_CREATE_REQUEST,
    });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        "content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };


    const {data} =await axios.post('http://localhost:8000/api/orders',order,config)
    dispatch({
        type:ORDER_CREATE_SUCCESS,
        paylaod:data
    })
  } catch (error) {
        dispatch({
            type:ORDER_CREATE_FAIL,
            paylaod:error.response && error.response.data.message ? error.response.data.message : error.message
        })
  }
};
