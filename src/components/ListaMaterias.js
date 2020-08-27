import React from "react";
import "../assets/styles/components/ListaMaterias.scss";

const ListaMaterias = () => {
  const tiraDeMaterias = [
    {
      nombre: "Matematicas",
      asesor: "Jorge Gonzales Gutierrez",
      ubicacion: "Aula 200, Edificio A",
      ponderacion: "33.33% Por Parcial",
    },
    {
      nombre: "Matematicas",
      asesor: "Jorge Gonzales Gutierrez",
      ubicacion: "Aula 200, Edificio A",
      ponderacion: "33.33% Por Parcial",
    },
    {
      nombre: "Matematicas",
      asesor: "Jorge Gonzales Gutierrez",
      ubicacion: "Aula 200, Edificio A",
      ponderacion: "33.33% Por Parcial",
    },
    {
      nombre: "Matematicas",
      asesor: "Jorge Gonzales Gutierrez",
      ubicacion: "Aula 200, Edificio A",
      ponderacion: "33.33% Por Parcial",
    },
    {
      nombre: "Matematicas",
      asesor: "Jorge Gonzales Gutierrez",
      ubicacion: "Aula 200, Edificio A",
      ponderacion: "33.33% Por Parcial",
    },
    {
      nombre: "Matematicas",
      asesor: "Jorge Gonzales Gutierrez",
      ubicacion: "Aula 200, Edificio A",
      ponderacion: "33.33% Por Parcial",
    },
    {
      nombre: "Matematicas",
      asesor: "Jorge Gonzales Gutierrez",
      ubicacion: "Aula 200, Edificio A",
      ponderacion: "33.33% Por Parcial",
    },
    {
      nombre: "Matematicas",
      asesor: "Jorge Gonzales Gutierrez",
      ubicacion: "Aula 200, Edificio A",
      ponderacion: "33.33% Por Parcial",
    },
    {
      nombre: "Matematicas",
      asesor: "Jorge Gonzales Gutierrez",
      ubicacion: "Aula 200, Edificio A",
      ponderacion: "33.33% Por Parcial",
    },
    {
      nombre: "Matematicas",
      asesor: "Jorge Gonzales Gutierrez",
      ubicacion: "Aula 200, Edificio A",
      ponderacion: "33.33% Por Parcial",
    },
  ];

  return (
    <div className="container-fluid p-5 mb-5 text-center listaMaterias">
      <h3 className="mb-4">
        <strong>Tira de Materias</strong>
      </h3>
      <div className="row">
        <div className="col listaMaterias__header p-3">
          <strong>Asignatura</strong>
        </div>
        <div className="col listaMaterias__header p-3">
          <strong>Asesor</strong>
        </div>
        <div className="col listaMaterias__header p-3">
          <strong>Ubicación</strong>
        </div>
        <div className="col listaMaterias__header p-3">
          <strong>Ponderación</strong>
        </div>
      </div>
      {tiraDeMaterias.map(({ nombre, asesor, ubicacion, ponderacion }, i) => {
        if (i % 2 === 0) {
          return (
            <div className="row p-3 light">
              <div className="col">{nombre}</div>
              <div className="col">{asesor}</div>
              <div className="col">{ubicacion}</div>
              <div className="col">{ponderacion}</div>
            </div>
          );
        } else {
          return (
            <div className="row p-3 dark">
              <div className="col">{nombre}</div>
              <div className="col">{asesor}</div>
              <div className="col">{ubicacion}</div>
              <div className="col">{ponderacion}</div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default ListaMaterias;
