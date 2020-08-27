import React, { useState } from "react";
import {
  Accordion,
  Card,
  AccordionToggle,
  AccordionCollapse,
} from "react-bootstrap";

const FiltroTabla = (props) => {
  const { atributos } = props;
  const findAction = props.find ? props.find : null;
  const [filterForm, setFilterForm] = useState({});

  const handleChange = (e) => {
    setFilterForm({
      ...filterForm,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <Accordion defaultActiveKey={null} className="mb-3">
      <Card key={0}>
        <AccordionToggle as={Card.Header} variant="link" eventKey={0}>
          <strong>Filtros</strong>
        </AccordionToggle>
        <AccordionCollapse key={0} eventKey={0}>
          <form className="px-5 py-1">
            <div className="form-row">
              {atributos
                ? atributos.map((atributo, index) => (
                    <div key={index} className="form-group col-md-6">
                      <label htmlFor={atributo}>{atributo}</label>
                      <input
                        type="text"
                        className="form-control"
                        id={atributo}
                        onChange={handleChange}
                        value={filterForm[atributo] ? filterForm[atributo] : ""}
                      ></input>
                    </div>
                  ))
                : null}
            </div>
            <div className="text-center m-3">
              {findAction ? (
                <button
                  className="btn btn-primary mr-2 w-25"
                  type="button"
                  onClick={() => {
                    const { type, url, action } = findAction;
                    action(url, filterForm, type);
                  }}
                >
                  Buscar
                </button>
              ) : null}
              <button
                className="btn btn-warning w-25"
                type="button"
                onClick={() => setFilterForm({})}
              >
                Limpiar Buscador
              </button>
            </div>
          </form>
        </AccordionCollapse>
      </Card>
    </Accordion>
  );
};

export default FiltroTabla;
