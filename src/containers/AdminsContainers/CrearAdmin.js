import React from "react";
import { connect } from "react-redux";
import FormularioAdmin from "../../components/FormularioAdmin";
import "../../assets/styles/components/Formulario.scss";
import { postFormulario } from "../../actions/utils";

const CrearAdmin = (props) => {
  const { fetching } = props;
  return (
    <div className="container-fluid m-0 mb-5 p-5 formulario">
      <h2 className="mb-3">
        <strong>Crear Administrador</strong>
      </h2>
      <FormularioAdmin
        create={{
          type: "POST_ADMIN",
          url: "http://localhost/hixo-school-api/public/api/admins",
          action: props.postFormulario,
        }}
        fetching={fetching}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  fetching: state.admins.fetching,
});

const mapDispatchToProps = (dispatch) => ({
  postFormulario: (url, body, type) =>
    dispatch(postFormulario(url, body, type)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CrearAdmin);
