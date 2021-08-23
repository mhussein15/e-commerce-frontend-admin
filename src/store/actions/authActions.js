import instance from "./instance";
import decode from "jwt-decode";
import { toast } from "react-toastify";

//Action Types

//Actions
const setUser = (access) => {
  localStorage.setItem("token", access);
  instance.defaults.headers.common.Authorization = `Bearer ${access}`;
  return {
    type: "SET_USER",
    payload: {
      token_info: decode(access),
    },
  };
};

export const signin = (user, history) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("/auth/signin", user);
      if (decode(res.data.access).admin) {
        localStorage.setItem("token", res.data.access);
        dispatch(setUser(res.data.access));
        history.replace("/");
      } else {
        toast.error("You Are Not An Admin");
      }
    } catch (error) {
      toast.error("Incorrect username/password combination");
    }
  };
};

export const signout = (history) => {
  localStorage.removeItem("token");
  delete instance.defaults.headers.common.Authorization;
  history.replace("/admin");
  return {
    type: "CLEAR_INFO",
  };
};

export const checkForToken = () => (dispatch) => {
  const token = localStorage.getItem("token");
  if (token) {
    const user = decode(token);
    const currentTime = Date.now();
    if (currentTime <= user.exp + currentTime) {
      dispatch(setUser(token));
    } else {
      localStorage.removeItem("token");
      dispatch(signout());
    }
  }
};
