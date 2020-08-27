import React from "react";
import { connect } from "react-redux";
import FormularioAlumno from "../../components/FormularioAlumno";
import "../../assets/styles/components/Formulario.scss";
import { postFormulario } from "../../actions/utils";

const CrearAlumno = (props) => {
  const { fetching } = props;
  return (
    <div className="container-fluid m-0 mb-5 p-5 formulario">
      <h2 className="mb-3">
        <strong>Crear Alumno</strong>
      </h2>
      <FormularioAlumno
        create={{
          type: "POST_ALUMNO",
          url: "http://localhost/hixo-school-api/public/api/alumnos",
          action: props.postFormulario,
        }}
        fetching={fetching}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  fetching: state.alumnos.fetching,
});

const mapDispatchToProps = (dispatch) => ({
  postFormulario: (url, body, type) =>
    dispatch(postFormulario(url, body, type)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CrearAlumno);
