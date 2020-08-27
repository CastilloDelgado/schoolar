import React from "react";
import { connect } from "react-redux";
import FormularioAlumno from "../../components/FormularioAlumno";
import "../../assets/styles/components/Formulario.scss";
import { patchFormulario, deleteElemento } from "../../actions/utils";

const ActualizarAlumno = (props) => {
  const { lista, alumno_para_actualizar, fetching } = props;
  return (
    <div className="justify-content-center container-fluid m-0 mb-5 p-5 formulario">
      <h2 className="mb-3 ">
        <strong>Editar Alumno</strong>
      </h2>
      <FormularioAlumno
        delete={{
          type: "DELETE_ALUMNO",
          url:
            "http://localhost/hixo-school-api/public/api/alumnos/" +
            alumno_para_actualizar,
          action: props.deleteElemento,
        }}
        update={{
          type: "PATCH_ALUMNO",
          url:
            "http://localhost/hixo-school-api/public/api/alumnos/" +
            alumno_para_actualizar,
          action: props.patchFormulario,
        }}
        values={lista}
        alumno_para_actualizar={alumno_para_actualizar}
        fetching={fetching}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  lista: state.alumnos.lista,
  alumno_para_actualizar: state.alumnos.alumno_para_actualizar,
  fetching: state.alumnos.fetching,
});

const mapDispatchToProps = (dispatch) => ({
  patchFormulario: (url, body, type) =>
    dispatch(patchFormulario(url, body, type)),
  deleteElemento: (url, type) => dispatch(deleteElemento(url, type)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ActualizarAlumno);
