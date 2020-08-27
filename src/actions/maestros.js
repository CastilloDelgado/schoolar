import axios from "axios";

export function getLista() {
  return (dispatch) =>
    dispatch({
      type: "FETCH_MAESTROS",
      payload: axios.get(
        "http://localhost/hixo-school-api/public/api/maestros"
      ),
    });
}

export function asignarMaestroActualizar(id) {
  return (dispatch) =>
    dispatch({
      type: "ACTUALIZAR_MAESTRO",
      payload: id,
    });
}
