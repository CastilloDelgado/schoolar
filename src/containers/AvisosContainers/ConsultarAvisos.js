import React, { useEffect } from "react";
import ListaConsultaEditar from "../../components/ListaConsultaEditar";
import { getLista, asignarAvisoActualizar } from "../../actions/avisos";
import { connect } from "react-redux";

const ConsultarAvisos = (props) => {
  const { lista, links, meta, fetching } = props;

  useEffect(() => {
    if (!lista) props.getLista();
  });

  return (
    <React.Fragment>
      <ListaConsultaEditar
        lista={lista}
        titulo="Consultar y Editar Avisos"
        links={links}
        meta={meta}
        type={"FETCH_AVISOS"}
        action={props.asignarAvisoActualizar}
        redirect={"/admin/actualizar-aviso"}
        fetching={fetching}
        find={{
          type: "FETCH_AVISOS",
          url: "http://localhost/hixo-school-api/public/api/avisos/find-avisos",
        }}
      />
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  lista: state.avisos.lista,
  links: state.avisos.links,
  meta: state.avisos.meta,
  fetching: state.avisos.fetching,
});

const mapDispatchToProps = (dispatch) => ({
  getLista: () => dispatch(getLista()),
  asignarAvisoActualizar: (id) => dispatch(asignarAvisoActualizar(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ConsultarAvisos);
