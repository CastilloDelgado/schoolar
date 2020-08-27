import React from "react";
import { connect } from "react-redux";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "../assets/styles/components/Navbar.scss";
import { Link } from "react-router-dom";
import { logout } from "../actions/usuario";
import { Redirect } from "react-router";

const Header = (props) => {
  const { loggedIn, infoCorto, appConfig } = props;
  const color = appConfig ? appConfig.color_hex : "gray"
  const handleClick = () => {
    props.logout();
  };

  if (loggedIn && infoCorto) {
    return (
      <Navbar expand="lg" className="navbar-dark navbar-app-color mt-5" style={{backgroundColor: `${color}`}}>
        <div className="container navbar-app-color">
          <Link to="/" className="navbar-brand">
            <Navbar.Brand>
              <strong>Escuela Secundaria</strong>
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ml-auto">
              <ul className="navbar-nav list-group">
                <li className="nav-item active">
                  <Link to="/inicio" className="nav-link ">
                    Inicio
                    <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/datos" className="nav-link">
                    Datos
                  </Link>
                </li>
                <NavDropdown title="Ciclo Escolar" id="nav-dropdown">
                  <ul className="px-3">
                    <li>
                      <Link to="/ciclo-escolar/horario">Horario</Link>
                    </li>
                    <li>
                      <Link to="/ciclo-escolar/calificaciones">
                        Calificaciones
                      </Link>
                    </li>
                    <li>
                      <Link to="/ciclo-escolar/materias">Tira de Materias</Link>
                    </li>
                  </ul>
                </NavDropdown>
                <NavDropdown title="Pagos" id="nav-dropdown">
                  <ul className="px-3">
                    <li>
                      <Link to="/pagos/pendientes">Pagos Pendientes</Link>
                    </li>
                    <li>
                      <Link to="/pagos/pedidos">Crear Pedidos</Link>
                    </li>
                  </ul>
                </NavDropdown>
                <li>
                  <button
                    type="button"
                    className="btn btn-warning"
                    onClick={handleClick}
                  >
                    Cerrar Sesión
                  </button>
                </li>
              </ul>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    );
  } else {
    return <Redirect to="/" />;
  }
};

const mapStateToProps = (state) => ({
  loggedIn: state.usuario.loggedIn,
  infoCorto: state.usuario.infoCorto,
  appConfig: state.appConfig.data,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
