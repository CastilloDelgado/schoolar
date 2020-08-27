import React, { useState, useEffect } from "react";
import LoginLoader from "../components/LoginLoader";

const FormularioAlumno = (props) => {
  const { values, alumno_para_actualizar, fetching } = props;
  let valuesToShow = null;

  const createAction = props.create ? props.create : null;
  const updateAction = props.update ? props.update : null;
  const deleteAction = props.delete ? props.delete : null;

  for (const value in values) {
    if (values[value].id === alumno_para_actualizar) {
      valuesToShow = values[value];
      break;
    }
  }

  const [form, setForm] = useState({
    nombre: null,
    segundo_nombre: null,
    apellido_paterno: null,
    apellido_materno: null,
    fecha_de_nacimiento: null,
    email: null,
    pais_de_origen: null,
    ciudad_de_origen: null,
  });

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };

  useEffect(() => {
    if (valuesToShow && form.nombre === null) {
      setForm({
        ...form,
        nombre: valuesToShow.nombre,
        segundo_nombre: valuesToShow.segundo_nombre,
        apellido_paterno: valuesToShow.apellido_paterno,
        apellido_materno: valuesToShow.apellido_materno,
        fecha_de_nacimiento: valuesToShow.fecha_de_nacimiento,
        email: valuesToShow.email,
        pais_de_origen: valuesToShow.pais_de_origen,
        ciudad_de_origen: valuesToShow.ciudad_de_origen,
      });
    }
  }, [valuesToShow, form]);

  return (
    <div>
      {!fetching ? (
        <form onSubmit={onSubmit}>
          <div className="alert alert-primary" role="alert">
            Completa el formulario y haz click en el boton de Crear Alumno.
          </div>
          <div className="row">
            <div className="form-group col-lg-5">
              Nombre
              <input
                type="text"
                className="form-control"
                id="nombre"
                onChange={handleChange}
                value={form.nombre ? form.nombre : ""}
              ></input>
            </div>
            <div className="form-group col-lg-5">
              Segundo Nombre
              <input
                type="text"
                className="form-control"
                id="segundo_nombre"
                onChange={handleChange}
                value={form.segundo_nombre ? form.segundo_nombre : ""}
              ></input>
            </div>
            <div className="form-group col-lg-5">
              Apellido Paterno
              <input
                type="text"
                className="form-control"
                id="apellido_paterno"
                onChange={handleChange}
                value={form.apellido_paterno ? form.apellido_paterno : ""}
              ></input>
            </div>
            <div className="form-group col-lg-5">
              Apellido Materno
              <input
                type="text"
                className="form-control"
                id="apellido_materno"
                onChange={handleChange}
                value={form.apellido_materno ? form.apellido_materno : ""}
              ></input>
            </div>
            <div className="form-group col-lg-5">
              Fecha de Nacimineto
              <input
                type="text"
                className="form-control"
                id="fecha_de_nacimiento"
                onChange={handleChange}
                value={form.fecha_de_nacimiento ? form.fecha_de_nacimiento : ""}
              ></input>
            </div>
            <div className="form-group col-lg-5">
              E-mail
              <input
                type="text"
                className="form-control"
                id="email"
                onChange={handleChange}
                value={form.email ? form.email : ""}
              ></input>
            </div>
            <div className="form-group col-lg-5">
              Pais de Origen
              <input
                type="text"
                className="form-control"
                id="pais_de_origen"
                onChange={handleChange}
                value={form.pais_de_origen ? form.pais_de_origen : ""}
              ></input>
            </div>
            <div className="form-group col-lg-5">
              Ciudad de Origen
              <input
                type="text"
                className="form-control"
                id="ciudad_de_origen"
                onChange={handleChange}
                value={form.ciudad_de_origen ? form.ciudad_de_origen : ""}
              ></input>
            </div>
          </div>
          <div className="text-center mt-4">
            {/* Se muestra el boton de crear si existen los props create */}
            {createAction ? (
              <button
                className="btn btn-primary w-25 mr-2"
                onClick={() => {
                  const { action, type, url } = createAction;
                  action(url, form, type);
                }}
              >
                Crear Alumno
              </button>
            ) : null}

            {/* Se muestra el boton de actualiar si existen los props update */}
            {updateAction ? (
              <button
                className="btn btn-primary w-25 mr-2"
                onClick={() => {
                  const { action, type, url } = updateAction;
                  action(url, form, type);
                }}
              >
                Actualiazar Alumno
              </button>
            ) : null}

            {/* Se muestra el boton de eliminar si existen los props delete */}
            {deleteAction ? (
              <button
                className="btn btn-danger w-25 mr-2"
                onClick={() => {
                  const { action, type, url } = deleteAction;
                  action(url, type);
                }}
              >
                Eliminar Alumno
              </button>
            ) : null}
            <button
              className="btn btn-warning w-25 "
              onClick={() =>
                setForm({
                  nombre: "",
                  segundo_nombre: "",
                  apellido_paterno: "",
                  apellido_materno: "",
                  fecha_de_nacimiento: "",
                  email: "null",
                  pais_de_origen: "",
                  ciudad_de_origen: "",
                })
              }
            >
              Limpiar Formulario
            </button>
          </div>
        </form>
      ) : (
        <LoginLoader />
      )}
    </div>
  );
};

export default FormularioAlumno;
