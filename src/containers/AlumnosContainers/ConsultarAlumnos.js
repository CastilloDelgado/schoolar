import React, { useEffect } from "react";
import ListaConsultaEditar from "../../components/ListaConsultaEditar";
import { getLista, asignarAlumnoActualizar } from "../../actions/alumnos";
import { connect } from "react-redux";

const ConsultarAlumnos = (props) => {
  const { lista, links, meta, fetching } = props;

  useEffect(() => {
    if (!lista) props.getLista();
  });

  return (
    <React.Fragment>
      <ListaConsultaEditar
        lista={lista}
        titulo="Consultar y Editar Alumnos"
        links={links}
        meta={meta}
        type={"FETCH_ALUMNOS"}
        action={props.asignarAlumnoActualizar}
        redirect={"/admin/actualizar-alumno"}
        find={{
          type: "FETCH_ALUMNOS",
          url: "http://localhost/hixo-school-api/public/api/users/find-alumnos",
        }}
        fetching={fetching}
      />
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  lista: state.alumnos.lista,
  links: state.alumnos.links,
  meta: state.alumnos.meta,
  fetching: state.alumnos.fetching,
});

const mapDispatchToProps = (dispatch) => ({
  getLista: () => dispatch(getLista()),
  asignarAlumnoActualizar: (id) => dispatch(asignarAlumnoActualizar(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ConsultarAlumnos);
