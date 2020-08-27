import React, { useState, useEffect } from "react";
import "../assets/styles/components/ListaGeneral.scss";
import LoginLoader from "../components/LoginLoader";
import Paginacion from "../components/Paginacion";
import { connect } from "react-redux";
import IconoEditar from "./IconoEditar";
import FiltroTabla from "./FiltroTabla";
import { findElement } from "../actions/utils";

const ListaConsultaEditar = (props) => {
  const [columnas, setColumnas] = useState();
  const { titulo, links, lista, meta, type, redirect, find, fetching } = props;
  const columnasAux = lista && lista[0] ? Object.keys(lista[0]) : null;
  const filas = [];

  if (lista && columnasAux) {
    lista.forEach((fila) => {
      let valores = Object.values(fila);
      valores.push(
        <IconoEditar id={valores[0]} link={redirect} action={props.action} />
      );
      filas.push(valores);
    });
    columnasAux.push("Editar");
  }

  useEffect(() => {
    if (columnasAux && !columnas) {
      setColumnas(columnasAux);
    }
  });

  return (
    <div className="listaGeneral container-fluid m-0 mb-5 p-5">
      <h2 className="mb-4">
        <strong>{titulo}</strong>
      </h2>
      {!fetching ? (
        <React.Fragment>
          <FiltroTabla
            atributos={columnas ? columnas : null}
            find={{
              type: find.type,
              url: find.url,
              action: props.findElement,
            }}
          />
          {lista ? (
            <table className="table table-striped">
              <thead className="thead-dark">
                <tr>
                  {columnas
                    ? columnas.map((columna, index) => (
                        <th key={index} scope="col">
                          {columna.toUpperCase()}
                        </th>
                      ))
                    : null}
                </tr>
              </thead>
              <tbody>
                {filas.map((fila, index) => (
                  <tr key={index}>
                    {Object.values(fila).map((celda, index) => (
                      <td key={index}>{celda}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          ) : null}
          <div className="container-fluid text-center">
            <div className="row">
              <div className="col"></div>
              {lista ? (
                <Paginacion
                  className="text-center"
                  links={links}
                  meta={meta}
                  type={type}
                />
              ) : null}
            </div>
          </div>
        </React.Fragment>
      ) : (
        <LoginLoader />
      )}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  findElement: (url, body, type) => dispatch(findElement(url, body, type)),
});

export default connect(null, mapDispatchToProps)(ListaConsultaEditar);
