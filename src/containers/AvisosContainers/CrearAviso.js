import React from "react";
import { connect } from "react-redux";
import FormularioAviso from "../../components/FormularioAviso";
import "../../assets/styles/components/Formulario.scss";
import { postFormulario } from "../../actions/utils";

const CrearAviso = (props) => {
  const { fetching } = props;
  return (
    <div className="container-fluid m-0 mb-5 p-5 formulario">
      <h2 className="mb-3">
        <strong>Crear Aviso</strong>
      </h2>
      <FormularioAviso
        create={{
          type: "POST_AVISO",
          url: "http://localhost/hixo-school-api/public/api/avisos",
          action: props.postFormulario,
        }}
        fetching={fetching}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  fetching: state.avisos.fetching,
});

const mapDispatchToProps = (dispatch) => ({
  postFormulario: (url, body, type) =>
    dispatch(postFormulario(url, body, type)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CrearAviso);
