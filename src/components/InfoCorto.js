import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../assets/styles/components/InfoCorto.scss";

const InfoCorto = ({ personInfo }) => {
  return (
    <div className="container-fluid mb-3 mb-md-5 mt-3 mt-md-5 ml-0 mr-0 infoCorto">
      {personInfo ? (
        <div className="row">
          <div className="col-12 col-lg-3 text-center m-0 p-md-2">
            <img
              src={personInfo.imagen_url}
              className="mt-5 mt-lg-0 p-lg-3"
              alt="Imagen de perfil"
            />
          </div>
          <div className="col-12 col-lg-5 p-3 mt-lg-2">
            <ul>
              <li>
                <strong>Nombre: </strong>
                {personInfo.nombre +
                  " " +
                  personInfo.segundo_nombre +
                  " " +
                  personInfo.apellido_paterno +
                  " " +
                  personInfo.apellido_materno}
              </li>
              <li>
                <strong>Código de Alumno: </strong>
                {personInfo.codigo_alumno}
              </li>
              <li>
                <strong>Grado: </strong>
                {personInfo.grado}
              </li>
              <li>
                <strong>Grupo: </strong>
                {personInfo.grupo}
              </li>
              <li>
                <strong>Curp: </strong>
                {personInfo.curp}
              </li>
              <li>
                <strong>Contacto de emergencia: </strong>
                {personInfo.contacto_nombre +
                  " " +
                  personInfo.contacto_segundo_nombre +
                  " " +
                  personInfo.contacto_apellido_paterno +
                  " " +
                  personInfo.contacto_apellido_materno}
              </li>
              <li>
                <strong>Telefono de Emergencia: </strong>
                {personInfo.contacto_telefono}
              </li>
              <li>
                <strong>Saldo Actual: </strong>
                {"$" + personInfo.saldo.toFixed(2)}
              </li>
            </ul>
          </div>
          <div className="col-12 col-lg-2 text-center pt-0 pb-4 m-lg-5 p-lg-5">
            <Link to="/datos">
              <button type="button" className="btn btn-warning">
                <strong>Mas información</strong>
              </button>
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => ({
  personInfo: state.usuario.infoCorto,
});

export default connect(mapStateToProps, null)(InfoCorto);
