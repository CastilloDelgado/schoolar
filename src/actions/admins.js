import axios from "axios";

export function getLista() {
  return (dispatch) =>
    dispatch({
      type: "FETCH_ADMINS",
      payload: axios.get("http://localhost/hixo-school-api/public/api/admins"),
    });
}

export function asignarAdminActualizar(id) {
  return (dispatch) =>
    dispatch({
      type: "ACTUALIZAR_ADMIN",
      payload: id,
    });
}
