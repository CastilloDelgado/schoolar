import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Router, Route, Switch } from "react-router-dom";
import Layout from "../components/Layout";
import AdminLayout from "../components/AdminLayout";
import FondoDinamico from "../components/FondoDinamico";
import Login from "../containers/Login";
import Inicio from "../containers/Inicio";
import NotFound from "../containers/NotFound";
import Datos from "../containers/Datos";
import Horario from "../containers/Horario";
import Materias from "../containers/Materias";
import Calificaciones from "../containers/Calificaciones";
import Pagos from "../containers/Pagos";
import PagosPendientes from "../containers/PagosPendientes";
import CrearPedidos from "../containers/CrearPedidos";
import LoginLoader from "../components/LoginLoader";
import { Redirect } from "react-router";
// Avisos Containers
import CrearAviso from "../containers/AvisosContainers/CrearAviso";
import ActualizarAviso from "../containers/AvisosContainers/ActualizarAviso";
import ConsultarAvisos from "../containers/AvisosContainers/ConsultarAvisos";

// Alumnos Containers
import CrearAlumno from "../containers/AlumnosContainers/CrearAlumno";
import ActualizarAlumno from "../containers/AlumnosContainers/ActualizarAlumno";
import ConsultarAlumnos from "../containers/AlumnosContainers/ConsultarAlumnos";

// Maestros Containers
import CrearMaestro from "../containers/MaestrosContainers/CrearMaestro";
import ActualizarMaestro from "../containers/MaestrosContainers/ActualizarMaestro";
import ConsultarMaestros from "../containers/MaestrosContainers/ConsultarMaestros";

// Admins Containers
import CrearAdmin from "../containers/AdminsContainers/CrearAdmin";
import ActualizarAdmin from "../containers/AdminsContainers/ActualizarAdmin";
import ConsultarAdmins from "../containers/AdminsContainers/ConsultarAdmins";
import history from "../history";

import { getAppConfig } from "../actions/appConfig";

const App = (props) => {
  const { info, loggedIn, appConfig } = props;

  if (!props.appConfig) {
    props.getAppConfig();
  }

  let toShow = null;
  if (!appConfig) {
    return <LoginLoader />;
  } else {
    if (info && info.infoCorto && loggedIn) {
      switch (info.infoCorto.tipo) {
        case 1:
          toShow = (
            <Layout>
              <Switch>
                <Route exact path="/inicio" component={Inicio} />
                <Route exact path="/datos" component={Datos} />
                <Route
                  exact
                  path="/ciclo-escolar/horario"
                  component={Horario}
                />
                <Route
                  exact
                  path="/ciclo-escolar/materias"
                  component={Materias}
                />
                <Route
                  exact
                  path="/ciclo-escolar/calificaciones"
                  component={Calificaciones}
                />
                <Route exact path="/pagos" component={Pagos} />
                <Route
                  exact
                  path="/pagos/pendientes"
                  component={PagosPendientes}
                />
                <Route exact path="/pagos/pedidos" component={CrearPedidos} />
                <Route component={NotFound} />
              </Switch>
            </Layout>
          );
          break;
        case 2:
        case 3:
          toShow = (
            <AdminLayout>
              <Route exact path="/admin" component={FondoDinamico} />
              {/* Avisos */}
              <Route exact path="/admin/crear-aviso" component={CrearAviso} />
              <Route
                exact
                path="/admin/consultar-avisos"
                component={ConsultarAvisos}
              />
              <Route
                exact
                path="/admin/actualizar-aviso"
                component={ActualizarAviso}
              />
              {/* Alumnos */}
              <Route exact path="/admin/crear-alumno" component={CrearAlumno} />
              <Route
                exact
                path="/admin/consultar-alumnos"
                component={ConsultarAlumnos}
              />
              <Route
                exact
                path="/admin/actualizar-alumno"
                component={ActualizarAlumno}
              />
              {/* Maestro */}
              <Route
                exact
                path="/admin/crear-maestro"
                component={CrearMaestro}
              />
              <Route
                exact
                path="/admin/consultar-maestros"
                component={ConsultarMaestros}
              />
              <Route
                exact
                path="/admin/actualizar-maestro"
                component={ActualizarMaestro}
              />
              {/* Admins */}
              <Route exact path="/admin/crear-admin" component={CrearAdmin} />
              <Route
                exact
                path="/admin/consultar-admins"
                component={ConsultarAdmins}
              />
              <Route
                exact
                path="/admin/actualizar-admin"
                component={ActualizarAdmin}
              />
            </AdminLayout>
          );
          break;
        default:
          toShow = <Redirect to="/" />;
          break;
      }
    } else {
      toShow = <Redirect to="/" />;
    }
  }

  console.log("Info: ", info);
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Login} />
        {toShow}
      </Switch>
    </Router>
  );
};

const mapStateToProps = (state) => ({
  info: state.usuario,
  loggedIn: state.usuario.loggedIn,
  appConfig: state.appConfig.data,
});

const mapDispatchToProps = (dispatch) => ({
  getAppConfig: () => dispatch(getAppConfig()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
