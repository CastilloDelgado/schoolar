import React, { useState } from "react";
import InfoCorto from "../components/InfoCorto";
import ListaGeneral from "../components/ListaGeneral";

const Icon = ({ id, onClick }) => (
  <div>
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      class="bi bi-x-circle-fill"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        onClick={onClick}
        id={id}
        fill-rule="evenodd"
        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.146-3.146a.5.5 0 0 0-.708-.708L8 7.293 4.854 4.146a.5.5 0 1 0-.708.708L7.293 8l-3.147 3.146a.5.5 0 0 0 .708.708L8 8.707l3.146 3.147a.5.5 0 0 0 .708-.708L8.707 8l3.147-3.146z"
      />
    </svg>
  </div>
);

const PagosPendientes = () => {
  const [lista] = useState({
    titulo: "Pagos Pendientes",
    columnas: [
      "N° Pedido",
      "Descripción",
      "Cantidad",
      "Fecha Limite de Pago",
      "Fecha del Pedido",
      "Precio Unitario",
      "Total",
    ],
    filas: [
      [
        "101",
        "Ciclo Escolar Tercer Grado",
        "1",
        "0000-00-00 00:00:00",
        "0000-00-00 00:00:00",
        "00000.00",
        "00000.00",
      ],
      [
        "102",
        "Ciclo Escolar Tercer Grado",
        "1",
        "0000-00-00 00:00:00",
        "0000-00-00 00:00:00",
        "00000.00",
        "00000.00",
      ],
      [
        "103",
        "Ciclo Escolar Tercer Grado",
        "1",
        "0000-00-00 00:00:00",
        "0000-00-00 00:00:00",
        "00000.00",
        "00000.00",
      ],
      [
        "104",
        "Ciclo Escolar Tercer Grado",
        "1",
        "0000-00-00 00:00:00",
        "0000-00-00 00:00:00",
        "00000.00",
        "00000.00",
      ],
      [
        "105",
        "Ciclo Escolar Tercer Grado",
        "1",
        "0000-00-00 00:00:00",
        "0000-00-00 00:00:00",
        "00000.00",
        "00000.00",
      ],
      [
        "106",
        "Ciclo Escolar Tercer Grado",
        "1",
        "0000-00-00 00:00:00",
        "0000-00-00 00:00:00",
        "00000.00",
        "00000.00",
      ],
      [
        "107",
        "Ciclo Escolar Tercer Grado",
        "1",
        "0000-00-00 00:00:00",
        "0000-00-00 00:00:00",
        "00000.00",
        "00000.00",
      ],
      [
        "101",
        "Ciclo Escolar Tercer Grado",
        "1",
        "0000-00-00 00:00:00",
        "0000-00-00 00:00:00",
        "00000.00",
        "00000.00",
      ],
      [
        "102",
        "Ciclo Escolar Tercer Grado",
        "1",
        "0000-00-00 00:00:00",
        "0000-00-00 00:00:00",
        "00000.00",
        "00000.00",
      ],
      [
        "103",
        "Ciclo Escolar Tercer Grado",
        "1",
        "0000-00-00 00:00:00",
        "0000-00-00 00:00:00",
        "00000.00",
        "00000.00",
      ],
      [
        "104",
        "Ciclo Escolar Tercer Grado",
        "1",
        "0000-00-00 00:00:00",
        "0000-00-00 00:00:00",
        "00000.00",
        "00000.00",
      ],
      [
        "105",
        "Ciclo Escolar Tercer Grado",
        "1",
        "0000-00-00 00:00:00",
        "0000-00-00 00:00:00",
        "00000.00",
        "00000.00",
      ],
      [
        "106",
        "Ciclo Escolar Tercer Grado",
        "1",
        "0000-00-00 00:00:00",
        "0000-00-00 00:00:00",
        "00000.00",
        "00000.00",
      ],
      [
        "107",
        "Ciclo Escolar Tercer Grado",
        "1",
        "0000-00-00 00:00:00",
        "0000-00-00 00:00:00",
        "00000.00",
        "00000.00",
      ],
    ],
  });

  const agregarColumnaAccion = (nombreColumna, onClick) => {
    let nuevaLista = lista;
    nuevaLista.columnas.push(nombreColumna)
    nuevaLista.filas.forEach(fila => fila.push(<Icon id={fila[0]} onClick={onClick} />))
  };

  agregarColumnaAccion("Nueva Columna", (event) => console.log("Fila: " + event.target.id))

  return (
    <React.Fragment>
      <InfoCorto />
      {/* Lista para mostrar los pagos pendientes */}
      <ListaGeneral scrollable lista={lista} />
    </React.Fragment>
  );
};

export default PagosPendientes;
