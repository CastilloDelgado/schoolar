import React, { useEffect } from "react";
import ListaConsultaEditar from "../../components/ListaConsultaEditar";
import { getLista, asignarMaestroActualizar } from "../../actions/maestros";
import { connect } from "react-redux";

const ConsultarMaestros = (props) => {
  const { lista, links, meta, fetching } = props;

  useEffect(() => {
    if (!lista) props.getLista();
  });

  return (
    <React.Fragment>
      <ListaConsultaEditar
        lista={lista}
        titulo="Consultar y Editar Maestros"
        links={links}
        meta={meta}
        type={"FETCH_MAESTROS"}
        action={props.asignarMaestroActualizar}
        redirect={"/admin/actualizar-maestro"}
        fetching={fetching}
        find={{
          type: "FETCH_MAESTROS",
          url:
            "http://localhost/hixo-school-api/public/api/maestros/find-maestros",
        }}
      />
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  lista: state.maestros.lista,
  links: state.maestros.links,
  meta: state.maestros.meta,
  fetching: state.maestros.fetching,
});

const mapDispatchToProps = (dispatch) => ({
  getLista: () => dispatch(getLista()),
  asignarMaestroActualizar: (id) => dispatch(asignarMaestroActualizar(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ConsultarMaestros);
