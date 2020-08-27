import React, { useState, useEffect } from "react";
import LoginLoader from "../components/LoginLoader";

const FormularioAviso = (props) => {
  const { values, aviso_para_actualizar, fetching } = props;
  let valuesToShow = null;

  const createAction = props.create ? props.create : null;
  const updateAction = props.update ? props.update : null;
  const deleteAction = props.delete ? props.delete : null;

  for (const value in values) {
    if (values[value].id === aviso_para_actualizar) {
      valuesToShow = values[value];
      break;
    }
  }

  const [form, setForm] = useState({
    titulo: null,
    texto: null,
    url_imagen: "www.imagen.com",
    usuario_id: 1,
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
    if (valuesToShow && form.titulo === null) {
      setForm({
        ...form,
        titulo: valuesToShow.titulo,
        texto: valuesToShow.texto,
        url_imagen: valuesToShow.url_imagen,
      });
    }
  }, [valuesToShow, form]);

  return !fetching ? (
    <form onSubmit={onSubmit}>
      <div className="alert alert-primary" role="alert">
        Completa el formulario y haz click en el boton de Crear Aviso para poder
        crear un aviso que puedan observar los estudiantes desde su plataforma.
      </div>
      <div className="form-group">
        Titulo <div className="text-muted">(50 Caracteres)</div>
        <input
          type="text"
          maxLength="50"
          className="form-control"
          id="titulo"
          onChange={handleChange}
          value={form.titulo ? form.titulo : ""}
        ></input>
        <small id="titulo" className="form-text text-muted">
          Crea un titulo corto y conciso de maximo 50 caracteres para que el
          aviso sea efectivo.
        </small>
      </div>
      <div className="form-group">
        <label htmlFor="texto">
          Texto <div className="text-muted">(300 Caracteres)</div>
        </label>
        <textarea
          type="text"
          id="texto"
          className="form-control"
          rows="3"
          maxLength="300"
          onChange={handleChange}
          value={form.texto ? form.texto : ""}
        ></textarea>
        <small id="titulo" className="form-text text-muted">
          Agrega un texto informativode hasta 300 caracteres.
        </small>
      </div>
      <div className="form-group">
        <label htmlFor="url_imagen">Importar Imagen</label>
        <input
          type="file"
          className="form-control-file"
          id="url_imagen"
        ></input>
        <small id="titulo" className="form-text text-muted">
          Ingresa una imagen de resolución 1920 por 1080 pixeles para que se
          muestre de una manera optima.
        </small>
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
            Crear Aviso
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
            Actualiazar Aviso
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
            Eliminar Aviso
          </button>
        ) : null}
        <button
          className="btn btn-warning w-25 "
          onClick={() =>
            setForm({
              titulo: "",
              texto: "",
              url_imagen: "",
            })
          }
        >
          Limpiar Formulario
        </button>
      </div>
    </form>
  ) : (
    <LoginLoader />
  );
};

export default FormularioAviso;
