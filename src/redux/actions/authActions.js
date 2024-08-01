import axios from "axios";

// Action Types
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOGOUT = "LOGOUT";

// Login Action
export const login = (email, password) => async (dispatch) => {
  try {
    const response = await axios.post("http://localhost:5000/api/user/login", {
      email,
      password,
    });
    const data = response.data;

    dispatch({
      type: LOGIN_SUCCESS,
      payload: data.accessToken,
    });
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
      payload: err.response.data.message || "Invalid email or password",
    });
  }
};

// Logout Action
export const logout = () => {
  return {
    type: LOGOUT,
  };
};
