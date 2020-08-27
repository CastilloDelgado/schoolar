import React from "react";
import "../assets/styles/Inicio.scss";
import InfoCorto from "../components/InfoCorto";
import PadOpciones from "../components/PadOpciones";
import Avisos from "../components/Avisos";
import Calendario from '../components/Calendario'
import { FacebookProvider, Comments } from 'react-facebook';

const Inicio = () => (
  <div className="container-fluid p-0">
    <InfoCorto />
    <PadOpciones
      opciones={[
        {
          titulo: "Datos",
          subtitulos: [
            {
              titulo: "Consultar Datos",
              link: "/datos/consultar",
            },
            {
              titulo: "Actualizar Datos",
              link: "/datos/actualizar",
            },
          ],
        },
        {
          titulo: "Ciclo Escolar",
          subtitulos: [
            {
              titulo: "Horario",
              link: "/ciclo-escolar/horario",
            },
            {
              titulo: "Calificaciones",
              link: "/ciclo-escolar/calificaciones",
            },
            {
              titulo: "Tira de materias",
              link: "/ciclo-escolar/materias",
            },
          ],
        },
        {
          titulo: "Pagos",
          subtitulos: [
            {
              titulo: "Pagos Pendientes",
              link: "/pagos/pendientes",
            },
            {
              titulo: "Generar Pedidos",
              link: "/pagos/pedidos",
            },
            {
              titulo: "Historial de Pagos",
              link: "/pagos/historial",
            },
          ],
        },
      ]}
    />
    <Calendario calendario_url="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FMexico_City&amp;src=NGoxMnM2NDh1Z212aDI0N2hyMGpraGxudnNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%233F51B5" />
    <Avisos />
  </div>
);

export default Inicio;
