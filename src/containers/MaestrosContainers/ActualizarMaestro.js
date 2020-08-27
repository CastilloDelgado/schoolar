import React from "react";
import { connect } from "react-redux";
import FormularioMaestro from "../../components/FormularioMaestro";
import "../../assets/styles/components/Formulario.scss";
import { patchFormulario, deleteElemento } from "../../actions/utils";

const ActualizarMaestro = (props) => {
  const { lista, maestro_para_actualizar, fetching } = props;
  return (
    <div className="container-fluid m-0 mb-5 p-5 formulario">
      <h2 className="mb-3">
        <strong>Editar Maestro</strong>
      </h2>
      <FormularioMaestro
        delete={{
          type: "DELETE_MAESTRO",
          url:
            "http://localhost/hixo-school-api/public/api/maestros/" +
            maestro_para_actualizar,
          action: props.deleteElemento,
        }}
        update={{
          type: "PATCH_MAESTRO",
          url:
            "http://localhost/hixo-school-api/public/api/maestros/" +
            maestro_para_actualizar,
          action: props.patchFormulario,
        }}
        values={lista}
        maestro_para_actualizar={maestro_para_actualizar}
        fetching={fetching}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  lista: state.maestros.lista,
  maestro_para_actualizar: state.maestros.maestro_para_actualizar,
  fetching: state.maestros.fetching,
});

const mapDispatchToProps = (dispatch) => ({
  patchFormulario: (url, body, type) =>
    dispatch(patchFormulario(url, body, type)),

  deleteElemento: (url, type) => dispatch(deleteElemento(url, type)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ActualizarMaestro);
