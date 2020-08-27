import axios from "axios";
import { successAlert, errorAlert } from "./alerts";
import history from "../history";

export function login(url, body, type, tipoUsuario) {
  return (dispatch) => {
    dispatch({
      type: type,
      payload: axios.post(url, body),
    })
      .then((response) => {
        successAlert(response.value.data.message);
        switch (response.value.data.data.tipo) {
          case 1:
            history.push("/inicio");
            break;
          case 2:
            history.push("/admin");
            break;
          default:
            break;
        }
        return response.data;
      })
      .catch((error) => {
        errorAlert(error.response ? error.response.user_message : toString(error));
        return error.response ? error.response.data : error;
      });
  };
}

export function logout() {
  return (dispatch) => {
    dispatch({
      type: "LOGOUT",
    });
    history.push("/gdsggasgdgas")
  };
}

export function getInfo() {
  return (dispatch) => {
    dispatch({
      type: "GET_USER_INFO",
      payload: axios.get(),
    })
      .then((response) => {
        successAlert(response.value.data.message);
        return response.data;
      })
      .catch((error) => {
        errorAlert(error.response.user_message);
        return error.response.data;
      });
  };
}
