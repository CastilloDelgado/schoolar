import React from "react";
import { connect } from "react-redux";
import { cambiarPagina } from "../actions/utils";

const Paginacion = (props) => {
  const { links, meta, type } = props;
  const handleClick = (e) => props.cambiarPagina(e.target.id, type);
  return (
    <nav aria-label="...">
      <ul className="pagination">
        <li className="page-item" disabled>
          <p
            className="page-link"
            id={links ? links.first : null}
            disabled={true}
            onClick={handleClick}
          >
            Primero
          </p>
        </li>
        <li
          className={links && links.prev ? "page-item" : "page-item disabled"}
        >
          <p
            className="page-link"
            id={links ? links.prev : null}
            disabled={true}
            onClick={handleClick}
          >
            Anterior
          </p>
        </li>
        <li className="page-item active">
          <p className="page-link">{meta ? meta.current_page : null}</p>
        </li>
        <li
          className={links && links.next ? "page-item" : "page-item disabled"}
        >
          <p
            className="page-link"
            id={links ? links.next : null}
            disabled={true}
            onClick={handleClick}
          >
            Siguiente
          </p>
        </li>
        <li className="page-item">
          <p
            className="page-link"
            id={links ? links.last : null}
            disabled={true}
            onClick={handleClick}
          >
            Ultimo
          </p>
        </li>
      </ul>
    </nav>
  );
};

const mapDispatchToProps = (dispatch) => ({
  cambiarPagina: (url, type) => dispatch(cambiarPagina(url, type)),
});

export default connect(null, mapDispatchToProps)(Paginacion);
