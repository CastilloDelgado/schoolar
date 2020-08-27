import React from "react";
import { connect } from "react-redux";
import FormularioAviso from "../../components/FormularioAviso";
import "../../assets/styles/components/Formulario.scss";
import { patchFormulario, deleteElemento } from "../../actions/utils";

const ActualizarAviso = (props) => {
  const { lista, aviso_para_actualizar, fetching } = props;
  return (
    <div className="container-fluid m-0 mb-5 p-5 formulario">
      <h2 className="mb-3">
        <strong>Editar Aviso</strong>
      </h2>
      <FormularioAviso
        delete={{
          type: "DELETE_AVISO",
          url:
            "http://localhost/hixo-school-api/public/api/avisos/" +
            aviso_para_actualizar,
          action: props.deleteElemento,
        }}
        update={{
          type: "PATCH_AVISO",
          url:
            "http://localhost/hixo-school-api/public/api/avisos/" +
            aviso_para_actualizar,
          action: props.patchFormulario,
        }}
        values={lista}
        aviso_para_actualizar={aviso_para_actualizar}
        fetching={fetching}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  lista: state.avisos.lista,
  aviso_para_actualizar: state.avisos.aviso_para_actualizar,
  fetching: state.avisos.fetching,
});

const mapDispatchToProps = (dispatch) => ({
  patchFormulario: (url, body, type) =>
    dispatch(patchFormulario(url, body, type)),

  deleteElemento: (url, type) => dispatch(deleteElemento(url, type)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ActualizarAviso);
