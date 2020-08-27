import axios from "axios";

export function getLista() {
  return (dispatch) =>
    dispatch({
      type: "FETCH_AVISOS",
      payload: axios.get("http://localhost/hixo-school-api/public/api/avisos"),
    });
}

export function asignarAvisoActualizar(id) {
  console.log(id)
  return (dispatch) =>
    dispatch({
      type: "ACTUALIZAR_AVISO",
      payload: id,
    });
}