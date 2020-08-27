import axios from "axios";
import { successAlert, errorAlert } from "./alerts";

export function cambiarPagina(url, type) {
  return (dispatch) =>
    dispatch({
      type: type,
      payload: axios.get(url),
    });
}

export function postFormulario(url, body, type) {
  return (dispatch) =>
    dispatch({
      type: type,
      payload: axios.post(url, body),
    })
      .then((response) => {
        successAlert(response.value.data.message);
        return response;
      })
      .catch((error) => {
        errorAlert(error.response.data.user_message);
        return error.response.data;
      });
}

export function patchFormulario(url, body, type) {
  return (dispatch) =>
    dispatch({
      type: type,
      payload: axios.patch(url, body),
    })
      .then((response) => {
        successAlert(response.value.data.message);
        return response;
      })
      .catch((error) => {
        errorAlert(error.response.data.user_message);
        return error.response.data;
      });
}

export function deleteElemento(url, type) {
  return (dispatch) =>
    dispatch({
      type: type,
      payload: axios.delete(url),
    })
      .then((response) => {
        successAlert(response.value.data.message);
        return response;
      })
      .catch((error) => {
        errorAlert(error.response.data.user_message);
        return error.response.data;
      });
}

export function findElement(url, body, type) {
  return (dispatch) =>
    dispatch({
      type: type,
      payload: axios.post(url, body),
    });
}
