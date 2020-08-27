import React from "react";
import { connect } from "react-redux";
import FormularioAdmin from "../../components/FormularioAdmin";
import "../../assets/styles/components/Formulario.scss";
import { patchFormulario, deleteElemento } from "../../actions/utils";

const ActualizarAdmin = (props) => {
  const { lista, admin_para_actualizar, fetching } = props;
  return (
    <div className="justify-content-center container-fluid m-0 mb-5 p-5 formulario">
      <h2 className="mb-3 ">
        <strong>Editar Administrador</strong>
      </h2>
      <FormularioAdmin
        delete={{
          type: "DELETE_ADMIN",
          url:
            "http://localhost/hixo-school-api/public/api/admins/" +
            admin_para_actualizar,
          action: props.deleteElemento,
        }}
        update={{
          type: "PATCH_ADMIN",
          url:
            "http://localhost/hixo-school-api/public/api/admins/" +
            admin_para_actualizar,
          action: props.patchFormulario,
        }}
        values={lista}
        admin_para_actualizar={admin_para_actualizar}
        fetching={fetching}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  lista: state.admins.lista,
  admin_para_actualizar: state.admins.admin_para_actualizar,
  fetching: state.admins.fetching,
});

const mapDispatchToProps = (dispatch) => ({
  patchFormulario: (url, body, type) =>
    dispatch(patchFormulario(url, body, type)),
  deleteElemento: (url, type) => dispatch(deleteElemento(url, type)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ActualizarAdmin);
