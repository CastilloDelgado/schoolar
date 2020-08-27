import { combineReducers } from "redux";
import avisos from "./avisos";
import alumnos from "./alumnos";
import maestros from "./maestros";
import admins from "./admins";
import usuario from "./usuario";
import appConfig from "./appConfig";

export default combineReducers({
  alumnos,
  appConfig,
  avisos,
  maestros,
  admins,
  usuario,
});
