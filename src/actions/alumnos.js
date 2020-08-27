import axios from "axios";

export function getLista() {
  return (dispatch) =>
    dispatch({
      type: "FETCH_ALUMNOS",
      payload: axios.get("http://localhost/hixo-school-api/public/api/alumnos"),
    });
}

export function asignarAlumnoActualizar(id) {
  return (dispatch) =>
    dispatch({
      type: "ACTUALIZAR_ALUMNO",
      payload: id,
    });
}
