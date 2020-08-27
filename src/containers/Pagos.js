import React from "react";
import InfoCorto from "../components/InfoCorto";
import PadOpciones from "../components/PadOpciones";
import '../assets/styles/Pagos.scss'
import Avisos from '../components/Avisos'

const Pagos = () => (
  <React.Fragment>
    <InfoCorto />
    <PadOpciones
      opciones={[
        {
          titulo: "Pagos Pendientes",
          subtitulos: [
            {
              titulo: "Consultar de Pagos Pendientes",
              link: "/pagos/pendientes",
            },
          ],
        },
        {
          titulo: "Crear Pedidos",
          subtitulos: [
            {
              titulo: "Realizar Nuevos Pedidos",
              link: "/pagos/pedidos",
            },
          ],
        },
        {
          titulo: "Historial De Pagos",
          subtitulos: [
            {
              titulo: "Consulta Tu Historial De Pagos",
              link: "/pagos/historial",
            },
          ],
        },
      ]}
    />
    <Avisos/>
  </React.Fragment>
);

export default Pagos;
