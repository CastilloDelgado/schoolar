import axios from "axios";

export function getAppConfig() {
  return (dispatch) =>
    dispatch({
      type: "FETCH_APP_CONFIG",
      payload: axios.get("http://localhost/hixo-school-api/public/api/app-config"),
    });
}
