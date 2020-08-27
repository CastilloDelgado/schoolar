import React from "react";
import profile_image from "../assets/img/person-example.jpg";
import "../assets/styles/components/InfoLargo.scss";

const InfoLargo = () => {
  const personInfo = [
    {
      title: "Información del Alumno",
      data: [
        { title: "Primer Nombre", data: "Juan" },
        { title: "Segundo Nombre", data: "Enrique" },
        { title: "Apellido Paterno", data: "Gómex" },
        { title: "Apellido Materno", data: "Gonzalez" },
        { title: "Código de Alumno", data: "AAA010101AAA" },
        { title: "Grado", data: "3" },
        { title: "Primer Nombre", data: "AB" },
        { title: "Curp", data: "FGDGAS242142AS01" },
        { title: "Sexo", data: "Masculina" },
        { title: "Correo", data: "juan.gomez@outlook.com" },
        { title: "Edad", data: "15" },
        { title: "Fecha de Nacimiento", data: "10-02-2005" },
        { title: "Ciudad de Origen", data: "Guadalajara" },
        { title: "Edgar de Origen", data: "Jalisco" },
        { title: "País de Origen", data: "México" },
      ],
    },
    {
      title: "Dirección del Alumno",
      data: [
        { title: "Calle", data: "Durazno" },
        { title: "Número", data: "1256" },
        { title: "Interior", data: "A" },
        { title: "Código Postal", data: "44900" },
        { title: "Colonia", data: "del Fresno" },
        { title: "Municipio", data: "Guadalajara" },
        { title: "Estado", data: "Jalisco" },
      ],
    },
    {
      title: "Contacto de Emergencia",
      data: [
        { title: "Nombre de Contacto", data: "Carolina" },
        { title: "Apellido Paterno", data: "Sandoval" },
        { title: "Apellido Materno", data: "Rios" },
        { title: "Parentesco", data: "Tia" },
        { title: "Telefonos", data: "3311225566" },
      ],
    },
    {
      title: "Saldo de Alumno",
      data: [{ title: "Saldo", data: "1000.13" }],
    },
  ];

  return (
    <div className="container-fluid infoLargo mt-3 mt-md-5 p-5 mb-3 mb-md-5">
      <div className="row">
        <div className="col-12 col-lg-4 text-center p-4">
          <img
            className="w-75 rounded"
            src={profile_image}
            alt="Imagen de perfil"
          />
          <p className="mt-3">
            <strong>Imagen del alumno</strong>
          </p>
        </div>
        <div className="col-12 col-lg-8">
          {personInfo.map((dataGroup, index) => (
            <ul key={index} className="p-0">
              <h3 className="mb-3 text-uppercase">
                <strong>{dataGroup.title}</strong>
              </h3>
              {dataGroup.data.map((data, index) => (
                <li key={index} className="mt-1">
                  <strong>{data.title + ": "}</strong>
                  {data.data}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfoLargo;
