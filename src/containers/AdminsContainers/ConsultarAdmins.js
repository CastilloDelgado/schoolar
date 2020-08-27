import React, { useEffect } from "react";
import ListaConsultaEditar from "../../components/ListaConsultaEditar";
import { getLista, asignarAdminActualizar } from "../../actions/admins";
import { connect } from "react-redux";

const ConsultarAdmins = (props) => {
  const { lista, links, meta, fetching } = props;

  useEffect(() => {
    if (!lista) props.getLista();
  });

  return (
    <React.Fragment>
      <ListaConsultaEditar
        lista={lista}
        titulo="Consultar y Editar Administradores"
        links={links}
        meta={meta}
        type={"FETCH_ADMINS"}
        action={props.asignarAdminActualizar}
        redirect={"/admin/actualizar-admin"}
        find={{
          type: "FETCH_ADMINS",
          url:
            "http://localhost/hixo-school-api/public/api/admins/find-admins",
        }}
        fetching={fetching}
      />
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  lista: state.admins.lista,
  links: state.admins.links,
  meta: state.admins.meta,
  fetching: state.admins.fetching,
});

const mapDispatchToProps = (dispatch) => ({
  getLista: () => dispatch(getLista()),
  asignarAdminActualizar: (id) => dispatch(asignarAdminActualizar(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ConsultarAdmins);
