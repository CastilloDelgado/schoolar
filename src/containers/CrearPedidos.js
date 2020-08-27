import React, { useState } from "react";
import InfoCorto from "../components/InfoCorto";
import camisa from "../assets/img/camisa-bayer.jpg";
import { Modal, Button, Alert } from "react-bootstrap";
import "../assets/styles/components/ListaGeneral.scss";

const CrearPedidos = () => {
  const [pedido, setPedido] = useState({});
  const [show, setShow] = useState(false);

  const productos = {
    P0001: {
      id: "P0001",
      imagen: camisa,
      nombre: "Camisa Uniforme Deportes Chica",
      descripcion:
        "Camisa deportiva de material textil ideal para las actividades recreativas.",
      tamano: "Chico",
      precio: "120.00",
    },
    P0002: {
      id: "P0002",
      imagen: camisa,
      nombre: "Camisa Uniforme Deportes Mediana",
      descripcion:
        "Camisa deportiva de material textil ideal para las actividades recreativas.",
      tamano: "Mediano",
      precio: "120.00",
    },
    P0003: {
      id: "P0003",
      imagen: camisa,
      nombre: "Camisa Uniforme Deportes Grande",
      descripcion:
        "Camisa deportiva de material textil ideal para las actividades recreativas.",
      tamano: "Grande",
      precio: "120.00",
    },
    P0004: {
      id: "P0004",
      imagen: camisa,
      nombre: "Camisa Uniforme Formal Chica",
      descripcion:
        "Camisa deportiva de material textil ideal para las actividades recreativas.",
      tamano: "Chico",
      precio: "120.00",
    },
    P0005: {
      id: "P0005",
      imagen: camisa,
      nombre: "Camisa Uniforme Formal Mediana",
      descripcion:
        "Camisa deportiva de material textil ideal para las actividades recreativas.",
      tamano: "Mediano",
      precio: "120.00",
    },
    P0006: {
      id: "P0006",
      imagen: camisa,
      nombre: "Camisa Uniforme Formal Granda",
      descripcion:
        "Camisa deportiva de material textil ideal para las actividades recreativas.",
      tamano: "Grande",
      precio: "120.00",
    },
  };

  /*  Tomar el primer atributo de la lista de productos como referencia
      para escribir las columnas que necesita la tabla.

      Object.values(productos)[0] para tomar el primer producto de la lista
      Object.keys para tomar los atributos del producto y ponerlos como columnas
      .map para iterar por el objeto e impirmir las columnas
  */

  const columnasListaProductos = Object.keys(Object.values(productos)[0]);
  const filasListaProductos = [];
  for (const producto in productos)
    filasListaProductos.push(Object.values(productos[producto]));

  let columnasListaPedido = [];
  let filasListaPedido = [];
  if (pedido) {
    if (Object.keys(pedido).length > 0) {
      columnasListaPedido = Object.keys(Object.values(pedido)[0]);
    }
    for (const producto in pedido) {
      filasListaPedido.push(Object.values(pedido[producto]));
    }
  }

  return (
    <React.Fragment>
      <InfoCorto />
      {/* Lista de Pedido */}
      <div className="listaGeneral container text-center mb-3 mb-md-5 p-5">
        <h2 className="mb-4">
          <strong>Pedido</strong>
        </h2>
        <table className="table table-sm table-striped table-responsive">
          <thead className="thead-dark">
            <tr>
              {columnasListaPedido.length > 0 ? (
                columnasListaPedido.map((columna) => <th>{columna}</th>)
              ) : (
                <h4>
                  <strong>Pedido Vacio, </strong>Agrega productos a tu pedido
                </h4>
              )}
            </tr>
          </thead>
          <tbody>
            {filasListaPedido.map((producto) => (
              <tr>
                {producto.map((celda) => (
                  <td>{celda}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="container mt-4">
          <div className="row">
            <div className="col">
              <button
                onClick={() => setPedido({})}
                className="w-100 btn btn-secondary"
                type="button"
                disabled={filasListaPedido.length === 0 ? true : false}
              >
                Vaciar Pedido
              </button>
            </div>
            <div className="col">
              <Button
                onClick={() => setShow(true)}
                className="w-100 btn btn-primary"
                type="button"
                disabled={filasListaPedido.length === 0 ? true : false}
              >
                Completar Pedido
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Lista de productos */}
      <div className="listaGeneral container text-center mb-3 mb-md-5 p-5">
        <h2 className="mb-4">
          <strong>Lista de Productos</strong>
        </h2>
        <div className="table-wrapped-scroll-y my-custom-scrollbar-large">
          <table className="table table-sm table-striped">
            <thead className="thead-dark">
              <tr>
                {columnasListaProductos.map((columna) => (
                  <th>{columna}</th>
                ))}
                {/* Columna extra para agregar la cantidad a solicitar */}
                <th>Cantidad</th>
              </tr>
            </thead>
            <tbody>
              {filasListaProductos.map((producto) => (
                <tr>
                  {producto.map((celda) => (
                    <td>{celda}</td>
                  ))}
                  {/* Columna extra para agregar la cantidad a solicitar */}
                  <td>
                    <select
                      id={producto[0]}
                      onChange={(event) => {
                        if (event.target.value !== 0) {
                          /* Agregar producto al pedido cuando selecciones cantidad > 0 */
                          let productoAux = productos[event.target.id];
                          productoAux.cantidad = event.target.value;
                          productoAux.total =
                            productoAux.cantidad * productoAux.precio;
                          setPedido({
                            ...pedido,
                            [event.target.id]: productoAux,
                          });
                          /* Eliminar del pedido cuando selecciones cantidad 0 */
                        } else {
                          let auxPedido = Object.assign({}, pedido);
                          delete auxPedido[event.target.id];
                          setPedido(auxPedido);
                        }
                      }}
                      class="form-control"
                    >
                      <option>0</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Completa tu pedido</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Alert variant="primary">
            Al dar click en completar tu pedido de descontará 10000 de tu saldo
            actual. En caso de no tener saldo suficiente la compra se descantará
            cuando tengas saldo positivo.
          </Alert>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={() => setShow(false)}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={() => setShow(false)}>
            Completar Pedido
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
};

export default CrearPedidos;
