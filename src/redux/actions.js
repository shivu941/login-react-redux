import loginDetails from "../components/LoginForm/loginDetails.json";
import { createBrowserHistory } from "history";

export const LOGIN_PENDING = "LOGIN_PENDING";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const history = createBrowserHistory();

export function loginAction(email, password) {
  return dispatch => {
    dispatch(setLoginPending(true));
    dispatch(setLoginSuccess(false));
    dispatch(setLoginError(null));

    callLoginApi(email, password, error => {
      // console.log("Err", !error);
      dispatch(setLoginPending(false));
      if (!error) {
        return dispatch(setLoginSuccess(true));
      } else {
        return dispatch(setLoginError(error));
      }
    });
  };
}

function setLoginPending(isLoginPending) {
  return {
    type: LOGIN_PENDING,
    isLoginPending
  };
}

function setLoginSuccess(isLoginSuccess) {
  return {
    type: LOGIN_SUCCESS,
    isLoginSuccess
  };
}

function setLoginError(loginError) {
  return {
    type: LOGIN_ERROR,
    loginError
  };
}

function callLoginApi(email, password, callback) {
  setTimeout(() => {
    if (email === loginDetails.username && password === loginDetails.password) {
      return callback(null);
    } else {
      return callback(new Error("Invalid email and password"));
    }
  }, 1000);
}
