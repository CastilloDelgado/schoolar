import React from "react";
import "../assets/styles/components/ListaGeneral.scss";

const ListaGeneral = ({lista, scrollable}) => {
  return (
    <div className="listaGeneral container-fluid text-center m-0 mb-5 p-5 ">
      <h2 className="mb-4">
        <strong>{lista.titulo}</strong>
      </h2>
      {scrollable ? (
        <div className="table-wrapped-scroll-y my-custom-scrollbar">
          <table className="table table-responsive overflow table-striped ">
            <thead className="thead-dark">
              <tr>
                {lista.columnas.map((columna) => (
                  <th scope="col">{columna}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {lista.filas.map((fila) => (
                <tr>
                  {fila.map((celda) => (
                    <td>{celda}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <table className="table ">
          <thead className="thead-dark">
            <tr>
              {lista.columnas.map((columna) => (
                <th scope="col">{columna}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {lista.filas.map((fila) => (
              <tr>
                {fila.map((celda) => (
                  <td>{celda}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ListaGeneral;
