import React from "react";
import { connect } from "react-redux";
import FormularioMaestro from "../../components/FormularioMaestro";
import "../../assets/styles/components/Formulario.scss";
import { postFormulario } from "../../actions/utils";

const CrearMaestro = (props) => {
  const { fetching } = props;
  return (
    <div className="container-fluid m-0 mb-5 p-5 formulario">
      <h2 className="mb-3">
        <strong>Crear Maestro</strong>
      </h2>
      <FormularioMaestro
        create={{
          type: "POST_MAESTRO",
          url: "http://localhost/hixo-school-api/public/api/maestros",
          action: props.postFormulario,
        }}
        fetching={fetching}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  fetching: state.maestros.fetching,
});

const mapDispatchToProps = (dispatch) => ({
  postFormulario: (url, body, type) =>
    dispatch(postFormulario(url, body, type)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CrearMaestro);
