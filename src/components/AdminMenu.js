import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../actions/usuario";
import {
  Accordion,
  Card,
  Button,
  AccordionToggle,
  AccordionCollapse,
} from "react-bootstrap";
import "../assets/styles/components/AdminMenu.scss";
import Logo from "../assets/img/hixo-logo.png";

const AdminMenu = (props) => {
  const { atributos, appConfig } = props;
  const color = appConfig ? appConfig.color_hex : "";

  return (
    <div
      className="container-fluid h-100 m-0 adminMenu text-center"
      style={{ backgroundColor: `${color}` }}
    >
      <Link to="/admin">
        <h2 className="my-auto pt-5">
          <strong>Preparatoria López Velarde</strong>
        </h2>
      </Link>
      <img src={appConfig.logo_url} alt="Logo de la escuela" className="w-75 m-4" />
      {atributos ? (
        <Accordion defaultActiveKey={0} className="m-2">
          {atributos.map((atributo, index) => (
            <Card key={index}>
              <AccordionToggle as={Card.Header} variant="link" eventKey={index}>
                <strong>{atributo.titulo}</strong>
              </AccordionToggle>
              {atributo.subtitulos.map((subtitulo, i) => (
                <AccordionCollapse key={i} eventKey={index}>
                  <Link to={subtitulo.link}>
                    <Card.Body>{subtitulo.titulo}</Card.Body>
                  </Link>
                </AccordionCollapse>
              ))}
            </Card>
          ))}
        </Accordion>
      ) : null}
      <Button variant="warning" className="m-3" onClick={() => props.logout()}>
        Cerrar Sesión
      </Button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  appConfig: state.appConfig.data,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminMenu);
